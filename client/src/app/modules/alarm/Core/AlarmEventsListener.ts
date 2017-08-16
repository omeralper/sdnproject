/**
 * Created by yildirayme on 26.06.2016.
 */
import {Injectable, Injector, NgModule} from "@angular/core";
import {AlarmDTO, AlarmDTODef} from "../../../swagger/AlarmDTO";
import {ALARMTYPE} from "../../../swagger/ALARMTYPE";
import {AuthenticationManager, AUTHENTICATION_EVENT_TYPE, UserInfo} from "../../AuthenticationManager";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {QueryOptions} from "../../../swagger/QueryOptions";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {SortOptions} from "../../../swagger/SortOptions";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {AlarmApi} from "../../../swagger/AlarmApi";
import {PageServices} from "../../PageServices";
import {ApiHelper} from "../../ApiHelper";
import {SessionManager} from "../../SessionManager";
import {EventsManager, IEventType, EVENT_SYSTEM} from "../../EventsManager";
import {AlarmGenerator} from "../Tests/AlarmGenerator";


/**
 * Alarm Event Management Module
 */
@NgModule({
    imports: [],
    declarations: [],
    providers: [AlarmGenerator]
})
@Injectable()
export class AlarmEventsListener {
    public static isLoaded = false;

    public alarmsWebSocket;
    public isActive: boolean = false;
    public errorCounter: number = 0;
    public reInitTimeout;

    // public intervalID: any;

    constructor(public eventsManager: EventsManager,
                public alarmApi: AlarmApi,
                public authenticationManager: AuthenticationManager,
                public sessionManager: SessionManager,
                public baseServices: PageServices) {

        if (AlarmEventsListener.isLoaded) {
            throw "AlarmEventsListener is singleton!";
        }
        AlarmEventsListener.isLoaded = true;

        //     let alarmGenerator;
        this.eventsManager.on<UserInfo>(AUTHENTICATION_EVENT_TYPE.LOGIN, (event) => {
            this.baseServices.logger.debug("ADMIN USER LOGIN", event.eventData);
            //let alarmGenerator = <AlarmGenerator>this.injector.get(AlarmGenerator);
            //alarmGenerator.start(this);

            this.startWebSocket();
            setTimeout(() => this.loadCurrentAlarms(ALARMTYPE.ALARM), 1000);
            setTimeout(() => this.loadCurrentAlarms(ALARMTYPE.EVENT), 1000);
        });

        this.eventsManager.on(AUTHENTICATION_EVENT_TYPE.LOGOUT, (event) => {
            this.baseServices.logger.debug("ADMIN USER LOGOUT");

            this.stopWebSocket();
            // if (is.existy(alarmGenerator)) {
            //     alarmGenerator.stop();
            //     alarmGenerator = null;
            // }
        });

        this.eventsManager.on<UserInfo>(AUTHENTICATION_EVENT_TYPE.USER_INFO_UPDATED, (event) => {
            this.baseServices.logger.debug("ADMIN USER USER_INFO_UPDATED", event.eventData);

        });

    }

    public startWebSocket() {
        if (!this.isActive && !this.alarmsWebSocket) {
            this.isActive = true;
            this.errorCounter = 0;
            this.initWebSocket();
        }
    }

    public stopWebSocket() {
        if (this.isActive && this.alarmsWebSocket) {
            clearTimeout(this.reInitTimeout);
            this.isActive = false;
            this.alarmsWebSocket.close(1000, 'WebSocket closed by client');
        }
    }

    public initWebSocket() {
        this.baseServices.logger.debug('AlarmEventsListener:initWebSocket');
        this.alarmsWebSocket = new WebSocket(this.baseServices.apiHelper.getAlarmsWebSocketUrl() + "/" + this.sessionManager.webSocketId);

        this.alarmsWebSocket.onopen = (e) => {
            this.baseServices.logger.debug("/prognetnm/alarms websocket connection has been opened");
        };

        this.alarmsWebSocket.onclose = (event) => {
            let reason;
            // See http://stackoverflow.com/questions/18803971/websocket-onerror-how-to-read-error-description
            // See http://tools.ietf.org/html/rfc6455#section-7.4.1
            if (event.code == ApiHelper.SERVER_INVALID_SESSION) {
                reason = "INVALID_SESSION received, terminating UI in 1 sec";

                //INFO we delay the session termination message, because logout may trigger this before completing its own.
                setTimeout(() => this.authenticationManager.terminateSession(), 1000);
            }
            else if (event.code == 1000)
                reason = "Normal closure, meaning that the purpose for which the connection was established has been fulfilled.";
            else if (event.code == 1001)
                reason = "An endpoint is \"going away\", such as a server going down or a browser having navigated away from a page.";
            else if (event.code == 1002)
                reason = "An endpoint is terminating the connection due to a protocol error";
            else if (event.code == 1003)
                reason = "An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message).";
            else if (event.code == 1004)
                reason = "Reserved. The specific meaning might be defined in the future.";
            else if (event.code == 1005)
                reason = "No status code was actually present.";
            else if (event.code == 1006)
                reason = "The connection was closed abnormally, e.g., without sending or receiving a Close control frame";
            else if (event.code == 1007)
                reason = "An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [http://tools.ietf.org/html/rfc3629] data within a text message).";
            else if (event.code == 1008)
                reason = "An endpoint is terminating the connection because it has received a message that \"violates its policy\". This reason is given either if there is no other sutible reason, or if there is a need to hide specific details about the policy.";
            else if (event.code == 1009)
                reason = "An endpoint is terminating the connection because it has received a message that is too big for it to process.";
            else if (event.code == 1010) // Note that this status code is not used by the server, because it can fail the WebSocket handshake instead.
                reason = "An endpoint (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn't return them in the response message of the WebSocket handshake. <br /> Specifically, the extensions that are needed are: " + event.reason;
            else if (event.code == 1011)
                reason = "A server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.";
            else if (event.code == 1015)
                reason = "The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).";
            else
                reason = "Unknown reason";

            this.baseServices.logger.warn("closed alarm websocket :", reason);
            this.baseServices.logger.debug("closed alarm websocket event :", event);

            this.alarmsWebSocket.onopen = null;
            this.alarmsWebSocket.onclose = null;
            this.alarmsWebSocket.onerror = null;
            this.alarmsWebSocket.onmessage = null;
            this.alarmsWebSocket = null;

            if (this.isActive && event.code != ApiHelper.SERVER_INVALID_SESSION) {//

                this.errorCounter = Math.min(8, this.errorCounter + 1);

                clearTimeout(this.reInitTimeout);
                this.reInitTimeout = setTimeout(() => {
                    this.initWebSocket();
                }, (1000 * this.errorCounter * this.errorCounter));
            }
        };

        this.alarmsWebSocket.onerror = (e) => {
            // this.baseServices.logger.error(e); //TODO- çok fazla log kalabalığı yaratıyor, sonra tekrar açılabilir
        }

        this.alarmsWebSocket.onmessage = (e) => {
            //this.baseServices.logger.trace("onmessage", e);
            try {
                let json = JSON.parse(e.data);
                this.emitEvent(<AlarmDTO>(json.data || json));
            } catch (e) {
                //this.baseServices.logger.error(e);//TODO- çok fazla log kalabalığı yaratıyor, sonra tekrar açılabilir
            }
        }
    }

    private isCurrentAlarmsLoaded = {};

    public loadCurrentAlarms(alarmType: ALARMTYPE) {
        if (!this.isCurrentAlarmsLoaded[alarmType] && this.authenticationManager.hasPermission('alarms:list')) {
            this.isCurrentAlarmsLoaded[alarmType] = true;
            //debugger;

            let queryOptions: QueryOptions;
            if (alarmType == ALARMTYPE.ALARM) {
                queryOptions = <QueryOptions>{
                    operator: QUERYOP.AND,
                    leftQuery: {
                        operator: QUERYOP.VALUE,
                        fieldName: 'alarmStatus',
                        fieldValue: 'ON'
                    },
                    rightQuery: {
                        operator: QUERYOP.VALUE,
                        fieldName: 'type',
                        fieldValue: ALARMTYPE[alarmType].toString()
                    }
                };
            } else {
                queryOptions = <QueryOptions>{
                    operator: QUERYOP.VALUE,
                    fieldName: 'type',
                    fieldValue: ALARMTYPE[alarmType].toString()
                }
            }
            ;

            let request: GenericSearchRequest = <GenericSearchRequest>this.baseServices.apiHelper.genRequest({
                options: <SearchOptions> {
                    startPage: 0,
                    pageSize: 51,
                    sortOptions: <SortOptions>{
                        fieldName: "time",
                        isAscend: false
                    },
                    fields: ["alarmStatus", "description", "detail", "guiNotification", "id", "name",
                        "resource", "resourceId", "revision", "severity", "source", "sourceHost",
                        "sourceInstance", "time", "timestamp", "type"], //Object.keys(AlarmDTODef.fields),
                    queryOptions: queryOptions
                }
            });

            this.baseServices.logger.debug("Request Current Alarms:", request);

            this.alarmApi
                .alarmSearchPOST(<GenericSearchRequest>request)
                .retry(3)
                .subscribe(
                    (response) => {
                        if (this.baseServices.uiHelper.processResponse(response)) {
                            response.data.list.reverse().forEach((itm: AlarmDTO, idx) => {
                                this.emitEvent(itm, UI_ALARM_EVENT_MODE.SILENT);
                            });
                        } else {
                            this.baseServices.logger.error("Alarm Data Error", response);
                            this.isCurrentAlarmsLoaded[alarmType] = false;
                        }
                    },
                    (error) => {
                        this.baseServices.uiHelper.processResponse(error);
                        this.isCurrentAlarmsLoaded[alarmType] = false;
                    }
                );
        }
    }

    public emitEvent(dto: AlarmDTO, mode: UI_ALARM_EVENT_MODE = UI_ALARM_EVENT_MODE.NORMAL) {
        switch (dto.type) {
            case ALARMTYPE.ALARM:
                this.eventsManager.emit<AlarmEvent>(ALARM_SYSTEM.ALARM, this.generateAlarm(dto, mode));
                break;
            case ALARMTYPE.EVENT:
                this.eventsManager.emit<AlarmEvent>(ALARM_SYSTEM.EVENT, this.generateAlarm(dto, mode));
                break;
            case ALARMTYPE.GENERIC_EVENT:
                this.eventsManager.emit<AlarmDTO>(EVENT_SYSTEM.GENERIC_EVENT, dto);
                break;
        }
    }

    public generateAlarm(data: AlarmDTO, mode: UI_ALARM_EVENT_MODE = UI_ALARM_EVENT_MODE.NORMAL): AlarmEvent {
        let alarmEvent = <AlarmEvent> {
            mode: mode,
            data: data
        };
        return alarmEvent;
    }

}

export class ALARM_SYSTEM {
    public static ALARM = <IEventType> {id: "ALARM_SYSTEM.ALARM"};
    public static EVENT = <IEventType> {id: "ALARM_SYSTEM.EVENT"};
}

export interface AlarmEvent {
    data: AlarmDTO;
    mode: UI_ALARM_EVENT_MODE;
}

export enum UI_ALARM_EVENT_MODE {
    NORMAL,
    SILENT
}
