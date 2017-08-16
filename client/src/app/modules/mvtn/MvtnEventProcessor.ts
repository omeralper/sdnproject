/**
 * Created by yildirayme on 06.03.2017.
 */
import {Injectable} from "@angular/core";
import {
    IEventType,
    EventsManager,
    EVENT_SYSTEM,
    IEventProcessor,
    IEventData,
    IEventProcessStatus
} from "../EventsManager";
import {AlarmDTO} from "../../swagger/AlarmDTO";
import {ALARMSOURCE} from "../../swagger/ALARMSOURCE";
import {GUINOTIFICATION} from "../../swagger/GUINOTIFICATION";
import {UIHelper, DIALOG_TYPES} from "../UIHelper";
import {i18nModule} from "../i18nModule";

@Injectable()
export class MvtnEventProcessor extends EVENT_SYSTEM implements IEventProcessor {
    public static EVENT = <IEventType> {id: "MVTN_SYSTEM.EVENT"};
    public static VTN_REQUEST_ACCEPTED = <IEventType> {id: "MVTN_SYSTEM.VTN_REQUEST_ACCEPTED"};
    public static VTN_REQUEST_REJECTED = <IEventType> {id: "MVTN_SYSTEM.VTN_REQUEST_REJECTED"};
    public static VTN_UPDATE_REQUEST_ACCEPTED = <IEventType> {id: "MVTN_SYSTEM.VTN_UPDATE_REQUEST_ACCEPTED"};
    public static VTN_UPDATE_REQUEST_REJECTED = <IEventType> {id: "MVTN_SYSTEM.VTN_UPDATE_REQUEST_REJECTED"};
    //specify the events that are accepted by this processor
    type: Array<IEventType> = [EVENT_SYSTEM.GENERIC_EVENT];

    constructor(//public mvtnController:MvtnController,
        public eventsManager: EventsManager,
        public i18n: i18nModule,
        public uiHelper: UIHelper) {
        super();
    }

    public process(event: IEventData<AlarmDTO>, lastStatus: IEventProcessStatus): IEventProcessStatus {
        if (event.eventData.source == ALARMSOURCE.MVTN) {
            this.eventsManager.emit(MvtnEventProcessor.EVENT, event.eventData);

            switch (event.eventData.name) {
                case "MvtnCreated":
                    this.eventsManager.emit(MvtnEventProcessor.VTN_REQUEST_ACCEPTED, event.eventData);
                    this.notifyVTNRequest(event.eventData, DIALOG_TYPES.SUCCESS);
                    break;
                case "MvtnRejected":
                    this.eventsManager.emit(MvtnEventProcessor.VTN_REQUEST_REJECTED, event.eventData);
                    this.notifyVTNRequest(event.eventData, DIALOG_TYPES.SUCCESS);
                    break;
                case "MvtnUpdateAccepted":
                    this.eventsManager.emit(MvtnEventProcessor.VTN_UPDATE_REQUEST_ACCEPTED, event.eventData);
                    this.notifyVTNRequest(event.eventData, DIALOG_TYPES.SUCCESS);
                    break;
                case "MvtnUpdateRejected":
                    this.eventsManager.emit(MvtnEventProcessor.VTN_UPDATE_REQUEST_REJECTED, event.eventData);
                    this.notifyVTNRequest(event.eventData, DIALOG_TYPES.SUCCESS);
                    break;
                default:
                    this.notifyVTNRequest(event.eventData, DIALOG_TYPES.INFO);
            }

            return <IEventProcessStatus>{isHandled: true, isEmitEvent: false};
        }
        return lastStatus;// <IEventProcessStatus>{ isHandled:false, isEmitEvent: true};
    }

    public notifyVTNRequest(eventData: AlarmDTO, dialogType: DIALOG_TYPES) {
        if (eventData.guiNotification == GUINOTIFICATION.VISIBLE) {
            let message = this.i18n.t("network_vis.virtual_topo_req.notify.messages."+eventData.name, {dto : eventData}) || eventData.description;
            this.uiHelper.notify(message, dialogType, () => {
                //TODO navigate to
                //this.mvtnController.viewTopologyByRequestId(event.eventData.vtnId);
            });
        }
    }
}
