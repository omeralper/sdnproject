/**
 * Created by yildirayme on 07.03.2017.
 */
import {Injectable} from "@angular/core";
import {EVENT_SYSTEM, IEventProcessor, IEventData, IEventType, IEventProcessStatus} from "../../EventsManager";
import {UIHelper, INotifyOptions, DIALOG_TYPES, NOTIFY_POSITIONS} from "../../UIHelper";
import {AlarmEvent, ALARM_SYSTEM, UI_ALARM_EVENT_MODE} from "./AlarmEventsListener";
import {AlarmDTO} from "../../../swagger/AlarmDTO";
import {SEVERITY} from "../../../swagger/SEVERITY";
import {ALARMSTATUS} from "../../../swagger/ALARMSTATUS";
import {i18nModule} from "../../i18nModule";
import {ALARMRESOURCE} from "../../../swagger/ALARMRESOURCE";
import {Action} from "../../../commons/Action";
import {PageServices} from "../../PageServices";
import {EmergencyPolicyApi} from "../../../swagger/EmergencyPolicyApi";
import {GenericIdRequest} from "../../../swagger/GenericIdRequest";

@Injectable()
export class AlarmEventProcessor extends EVENT_SYSTEM implements IEventProcessor {
    //specify the events that are accepted by this processor
    type: Array<IEventType> = [ALARM_SYSTEM.ALARM,ALARM_SYSTEM.EVENT];

    constructor(public uiHelper: UIHelper,
                public i18n: i18nModule,
                public baseServices: PageServices,
                public emergencyPolicyApi: EmergencyPolicyApi) {
        super();
    }

    public process(event: IEventData<AlarmEvent>,lastStatus:IEventProcessStatus): IEventProcessStatus {
        if (event.eventData.mode != UI_ALARM_EVENT_MODE.SILENT) {
            this.notifyForAlarm(event.eventData.data);
            lastStatus.isHandled = true;
        }
        return lastStatus;// <IEventProcessStatus>{ isHandled:true, isEmitEvent: true};

    }

    public notifyList = {};

    public getAlarmKey(event: AlarmDTO) {
        return `${event.severity}@${event.alarmStatus}`;
    }

    public notifyForAlarm(event: AlarmDTO) {

        if(event.resource == ALARMRESOURCE.EMERGENCY_POLICY){
            this.baseServices.uiHelper.confirm(this.i18n.t('alarms.list.messages.emergency', {dto: event}), (selected:Action)=> {
                if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                    //this.baseServices.uiHelper.alert("OK we will delete");

                    let request = this.baseServices.apiHelper.genRequest({
                        id: event.emergencyPolicyIdArray[0]
                        }
                    );

                    this.emergencyPolicyApi
                        .emergencyPolicyStartStopVnfPOST(<GenericIdRequest>request)
                        .subscribe(
                            (res) => {
                                if (this.baseServices.uiHelper.processResponse(res, this.i18n.t('alarms.list.messages.emergency_confirm'))) {
                                }
                            },
                            (error:any) => {
                                this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                            }
                        );

                }
            })
        } else if (event.severity == SEVERITY.FATAL || event.severity == SEVERITY.CRITICAL) {

            let key = this.getAlarmKey(event);

            if (!this.notifyList[key]) {
                this.notifyList[key] = {
                    alarmStatus: event.alarmStatus,
                    severity: event.severity,
                    timeout: null,
                    list: []
                };
            }

            this.notifyList[key].list.push(event);

            clearTimeout(this.notifyList[key].timeout);
            this.notifyList[key].timeout = setTimeout(() => {
                let eventDetails = this.notifyList[key];
                let isAlarmOn = (eventDetails.alarmStatus == ALARMSTATUS.ON);
                let iconOptions = this.uiHelper.getIconOptions("SEVERITY", eventDetails.severity);
                delete this.notifyList[key];

                this.uiHelper.notifyEx(<INotifyOptions>{
                    message: this.i18n.t('alarms.notify.labels.' + (isAlarmOn ? 'alarm_on' : 'alarm_off'), {
                        count: eventDetails.list.length,
                        iconOptions: iconOptions
                    }),
                    type: (isAlarmOn ? DIALOG_TYPES.ERROR : DIALOG_TYPES.SUCCESS),
                    position: NOTIFY_POSITIONS.TOP_RIGHT,
                    isSilent: true,
                    callback: (action) => {
                        if (action == this.uiHelper.DIALOG_BUTTONS.OK) {
                            //this.viewAlarm(event);
                            //this.viewAll();
                        }
                    }
                });
            }, 500);
        }
    }

}
