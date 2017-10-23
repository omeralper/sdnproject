/**
 * Created by yildirayme on 03.03.2017.
 */
import {Injectable, EventEmitter, Injector} from "@angular/core";
import {Logger} from "./Logger";

@Injectable()
export class EventsManager {
    public static EVENT_PROCESSOR: string = "EVENT_PROCESSOR";

    public eventStore: {[key: string]: EventEmitter<any>;} = {};

    public _eventProcessors: {[key: string]: Array<IEventProcessor>;};
    public get eventProcessors(): {[key: string]: Array<IEventProcessor>;} {
        if (is.not.existy(this._eventProcessors)){
            this._eventProcessors = {};
            let processorList = <Array<IEventProcessor>>this.injector.get(EventsManager.EVENT_PROCESSOR);
            for(let i=0,ci=processorList.length;i<ci;i++){
                let processor = processorList[i];
                for(let j=0,cj=processor.type.length;j<cj;j++){
                    let type = processor.type[j];
                    let store = this._eventProcessors[type.id];
                    if (is.not.existy(store)){
                        store = this._eventProcessors[type.id] = [];
                    }
                    store.push(processor);
                }
            }
            for(let type in this._eventProcessors){
                this._eventProcessors[type].sort((a,b) => { return b.priority - a.priority;});
            }
        }

        return this._eventProcessors;
    }

    constructor(public logger: Logger,
                public injector: Injector) {
    }

    public on<T>(eventType: IEventType, callback: IEventCallback<T>): IEventSubscription {
        let emitter = this.getEventEmitter<T>(eventType);
        this.logger.debug(`Subscribe to Event: ${JSON.stringify(eventType)}`);
        return emitter.subscribe(callback);
    }

    public emit<T>(eventType: IEventType, rawData?: T) {
        let emitter = this.getEventEmitter<T>(eventType);
        let eventData = <IEventData<T>>{
            eventType: eventType,
            eventData: rawData
        };

        let isEmitEvent = true;
        let lastStatus = <IEventProcessStatus> { isHandled: false, isEmitEvent: true };
        if (is.existy(this.eventProcessors)) {
            let processorStore = this.eventProcessors[eventType.id];
            if (is.existy(processorStore)) {
                for (let index = 0, count = processorStore.length; index < count; index++) {
                    let processor = processorStore[index];
                    lastStatus = processor.process(eventData,lastStatus);
                    isEmitEvent = lastStatus.isEmitEvent && isEmitEvent; //WARN sıralama önemli, isEmitEvent en sonda olmalı
                }
            }
        }

        if (isEmitEvent) {
            this.logger.debug('Emit Event:',eventData);
            emitter.emit(eventData);
        }
    }

    public getEventEmitter<T>(eventType: IEventType) {
        let emitter: EventEmitter<IEventData<T>> = this.eventStore[eventType.id];
        if (is.not.existy(emitter)) {
            emitter = new EventEmitter<IEventData<T>>();
            this.eventStore[eventType.id] = emitter;
        }
        return emitter;
    }
}

export interface IEventType {
    id: string;
}

export interface IEventData<T> {
    eventType: IEventType;
    eventData: T;
}

export interface IEventCallback<T> { (eventData: IEventData<T>): void
}

export interface IEventSubscription {
    unsubscribe();
}

export interface IEventProcessStatus {
    isHandled:boolean;
    isEmitEvent:Boolean;
}

export interface IEventProcessor {
    process<T>(event: IEventData<T>,lastStatus:IEventProcessStatus): IEventProcessStatus;
    priority: number;
    type: Array<IEventType>;
}

export abstract class EVENT_SYSTEM implements IEventProcessor {
    public static GENERIC_EVENT = <IEventType> {id: "EVENT_SYSTEM.GENERIC_EVENT"};
    priority: number = 10;

    abstract type: Array<IEventType>;
    abstract process<T>(event: IEventData<T>,lastStatus:IEventProcessStatus): IEventProcessStatus;
}
