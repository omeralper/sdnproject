/**
 * Created by yildirayme on 24.10.2016.
 */
import {Injectable, Inject, EventEmitter} from "@angular/core";
import {PageServices} from "./PageServices";
import {TopologyEventDTO} from "../swagger/TopologyEventDTO";
import {ApiHelper} from "./ApiHelper";
import {ISessionInvalidator} from "./AuthenticationManager";
import {SessionManager} from "./SessionManager";
import {ISessionInvalidatorToken} from "../app.tokens";

@Injectable()
export class TopologyEventsListenerFactory {

    constructor(@Inject(ISessionInvalidatorToken) public sessionInvalidator: ISessionInvalidator, public sessionManager: SessionManager, public baseServices: PageServices) {

    }

    public getListener(websocketid: any): TopologyEventsListener {
        return new TopologyEventsListener(websocketid, this.sessionInvalidator, this.sessionManager, this.baseServices);
    }
}

/**
 * Topology Events Management Module
 */
export class TopologyEventsListener {

    public eventEmitter$: EventEmitter<TopologyEventDTO>;

    public get events() {
        return this.eventEmitter$;
    }

    public eventWebSocket;
    public isActive: boolean = false;
    public errorCounter: number = 0;
    public reInitTimeout;


    constructor(public topologyId: any, public sessionInvalidator: ISessionInvalidator, public sessionManager: SessionManager, public baseServices: PageServices) {
        this.eventEmitter$ = new EventEmitter<TopologyEventDTO>();
    }

    public startWebSocket() {
        if (!this.isActive && !this.eventWebSocket) {
            this.isActive = true;
            this.errorCounter = 0;
            this.initWebSocket();
        }
    }

    public stopWebSocket() {
        if (this.isActive && this.eventWebSocket) {
            clearTimeout(this.reInitTimeout);
            this.isActive = false;
            this.eventWebSocket.close(1000, 'WebSocket closed by client');
        }
    }

    public initWebSocket() {
        this.baseServices.logger.debug('TopologyEventsListener:initWebSocket');
        this.topologyId = this.topologyId == "SUPER" ? "0" : this.topologyId; // quick fix for SUPER_TOPOLOGY events, TODO change
        this.eventWebSocket = new WebSocket(this.baseServices.apiHelper.getEventsWebSocketUrl() + "/" + this.topologyId + "/" + this.sessionManager.webSocketId);

        this.eventWebSocket.onopen = (e) => {
            this.baseServices.logger.debug(this.baseServices.apiHelper.getEventsWebSocketUrl() + " websocket connection has been opened");
            clearTimeout(this.reInitTimeout);
        };

        this.eventWebSocket.onclose = (event) => {
            let reason;
            // See http://stackoverflow.com/questions/18803971/websocket-onerror-how-to-read-error-description
            // See http://tools.ietf.org/html/rfc6455#section-7.4.1
            if (event.code == ApiHelper.SERVER_INVALID_SESSION) {
                reason = "INVALID_SESSION received, terminating UI in 1 sec";

                //INFO we delay the session termination message, because logout may trigger this before completing its own.
                setTimeout(()=> this.sessionInvalidator.terminateSession(), 1000);
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

            this.baseServices.logger.warn("closed events websocket :", reason);
            this.baseServices.logger.debug("closed events websocket event :", event);

            this.eventWebSocket.onopen = null;
            this.eventWebSocket.onclose = null;
            this.eventWebSocket.onerror = null;
            this.eventWebSocket.onmessage = null;
            this.eventWebSocket = null;

            if (this.isActive && event.code != ApiHelper.SERVER_INVALID_SESSION) {//

                this.errorCounter = Math.min(8, this.errorCounter + 1);

                clearTimeout(this.reInitTimeout);
                this.reInitTimeout = setTimeout(()=> {
                    this.initWebSocket();
                }, (1000 * this.errorCounter * this.errorCounter));
            }
        };

        this.eventWebSocket.onerror = (e) => {
            this.baseServices.logger.error(e);
        }

        this.eventWebSocket.onmessage = (e) => {
            //this.baseServices.logger.trace("onmessage", e);
            try {
                let json = JSON.parse(e.data);
                this.eventEmitter$.emit(<TopologyEventDTO>json);
            } catch (e) {
                this.baseServices.logger.error(e);
            }
        }
    }

    public emitEvent(data: TopologyEventDTO) {
        this.eventEmitter$.emit(data);
    }

}
