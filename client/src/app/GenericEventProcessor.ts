/**
 * Created by yildirayme on 06.03.2017.
 */
import {Injectable} from "@angular/core";
import {IEventProcessor, IEventData, EVENT_SYSTEM, IEventType, IEventProcessStatus} from "./modules/EventsManager";
import {AlarmDTO} from "./swagger/AlarmDTO";
import {UIHelper, DIALOG_TYPES} from "./modules/UIHelper";
import {GUINOTIFICATION} from "./swagger/GUINOTIFICATION";

@Injectable()
export class GenericEventProcessor extends EVENT_SYSTEM implements IEventProcessor {
    //specify the events that are accepted by this processor
    type: Array<IEventType> = [EVENT_SYSTEM.GENERIC_EVENT];

    constructor(public uiHelper: UIHelper) {
        super();
        this.priority = -1; //this must be the last item in the chain
    }

    public process(event: IEventData<AlarmDTO>, lastStatus: IEventProcessStatus): IEventProcessStatus {
        if (!lastStatus.isHandled && event.eventData.guiNotification == GUINOTIFICATION.VISIBLE) {
            this.uiHelper.notify(event.eventData.description, DIALOG_TYPES.INFO);
            lastStatus.isHandled = true;
            return lastStatus; //<IEventProcessStatus>{ isHandled:true, isEmitEvent: true};
        }
        return lastStatus;// <IEventProcessStatus>{ isHandled:false, isEmitEvent: true};
    }

}
