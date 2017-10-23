/**
 * Created by yildirayme on 13.04.2017.
 */
import {ChangeDetectorRef, Component, ElementRef, OnDestroy} from "@angular/core";
import {EventsManager, IEventSubscription} from "../../modules/EventsManager";
import {AUTHENTICATION_EVENT_TYPE, UserInfo} from "../../modules/AuthenticationManager";
import {INotificationDTO, NotificationComponent} from "./notification.component";
import {AlarmDTO} from "../../swagger/AlarmDTO";
import {AlarmLogListPopup} from "../../modules/alarm/AlarmLogListPopup/AlarmLogListPopup";
import {ALARM_SYSTEM, AlarmEvent} from "../../modules/alarm/Core/AlarmEventsListener";
import {AlarmLogListProvider} from "../../modules/alarm/AlarmLogListPage/AlarmLogListProvider";
import {PageServices} from "../../modules/PageServices";

@Component({
    moduleId: module.id,
    selector: 'commons-alarm-event-notification-component',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class AlarmEventNotificationComponent extends NotificationComponent<AlarmDTO> implements OnDestroy {

    public alarmEventSubscription: IEventSubscription;
    public alarmTimeagoTimeout: any;
    public ALARM_LIMIT = 50;
    public alarmListTimeout;

    constructor(public eventsManager: EventsManager,
                public dataProvider: AlarmLogListProvider,
                public changeDetector: ChangeDetectorRef,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.logger.info("AlarmEventNotificationComponent Initialized");

        this.titleKey = "alarms.notify_event.title";
        this.itemCountKey = "alarms.notify_event.labels.alarm_count";
        this.viewAllKey = "alarms.notify_event.labels.view_all";
        this.iconClass = "fa fa-warning";
        this.buttonClass = "btn-group-orange";

        eventsManager.on<UserInfo>(AUTHENTICATION_EVENT_TYPE.LOGIN, (event) => {
            this.subscribeToAlarmEvents();
        });

        eventsManager.on<UserInfo>(AUTHENTICATION_EVENT_TYPE.LOGOUT, (event) => {
            this.unSubscribeFromAlarmEvents();
        });

        //This component is visible when user logins, so we also initialize directly
        this.subscribeToAlarmEvents();
    }


	ngOnDestroy() {
		clearTimeout(this.alarmListTimeout);
        clearInterval(this.alarmTimeagoTimeout);
	}

    public subscribeToAlarmEvents() {
        this.unSubscribeFromAlarmEvents();
        this.alarmEventSubscription = this.eventsManager.on<AlarmEvent>(ALARM_SYSTEM.EVENT, (event) => {
            this.baseServices.logger.debug("ALARM EVENT RECEIVED", event.eventData.data);
            if( !(!this.p('phy_topo:manage') && event.eventData.data.name == "MvtnLinkRebuilt") ){// SAY and event is "MvtnLinkRebuilt" TODO
                this.addAlarm(event.eventData.data);
            }
        });
        clearInterval(this.alarmTimeagoTimeout);
        this.alarmTimeagoTimeout = setInterval(() => this.updateAlarmTimes(), 60000);
    }

    public unSubscribeFromAlarmEvents() {
        clearInterval(this.alarmTimeagoTimeout);
        if (this.alarmEventSubscription) {
            this.alarmEventSubscription.unsubscribe();
            this.alarmEventSubscription = null;
        }
    }

    public addAlarm(alarm: AlarmDTO) {
        if (!this.items) this.items = [];
        this.items.unshift({
            name: this.dataProvider.getAlarmName(alarm.name),
            status: this.baseServices.uiHelper.getIconOptions("ALARMSTATUS", alarm.alarmStatus),
            severity: this.baseServices.uiHelper.getIconOptions("SEVERITY", alarm.severity),
            timeago: this.baseServices.uiHelper.formatTimeAgo(alarm.time, true),
            dto: alarm
        });

        this.checkItemExcess();

        clearTimeout(this.alarmListTimeout);
        this.alarmListTimeout = setTimeout(() => {
            this.changeDetector.detectChanges();
            this.baseServices.uiHelper.initSlimScroll(this.$container);
        }, 500);
    }

    public updateAlarmTimes() {
        console.debug('updateAlarmTimes');
        if (is.existy(this.items)) {
            this.items.forEach((itm) => {
                itm.timeago = this.baseServices.uiHelper.formatTimeAgo(itm.dto.time, true);
            });
            this.changeDetector.detectChanges();
        }
    }

    public viewItem(item: INotificationDTO<AlarmDTO>) {
        if (item) {
            if (this.items.length > 1) {
                this.items = this.items.filter((itm) => {
                    return item.dto.id != itm.dto.id;
                });
            } else {
                this.clearItems();
            }

            this.checkItemExcess();
            //this.changeDetector.detectChanges();
            //this.router.navigate(['AlarmListPage', {type: 'ALARM', itm}]);
            this.baseServices.sharedService.showModal(AlarmLogListPopup, item.dto, (result) => {
            });
        }
    }

    public viewAll() {
        this.clearItems();
        this.baseServices.router.navigate(['/alarms/alarmlist', {type: 'EVENT'}]);
    }

    public clearItems() {
        this.items = [];
        this.hasExcess = false;
        this.changeDetector.detectChanges();
    }

    public checkItemExcess() {
        if (this.items.length > this.ALARM_LIMIT) {
            this.hasExcess = true;
            this.items.pop();
        } else {
            this.hasExcess = false;
        }
    }
}

