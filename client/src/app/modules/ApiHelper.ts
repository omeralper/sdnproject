/**
 * Created by yildirayme on 21.04.2016.
 */
import {Injectable} from "@angular/core";
import {Utils} from "./Utils";
import {SecurityToken} from "../swagger/SecurityToken";
import {GenericRequest} from "../swagger/GenericRequest";
import {BaseDTO} from "../swagger/BaseDTO";
import {ApiConfig} from "../swagger/ApiConfig";
import {SessionManager} from "./SessionManager";
import {ListOptions} from "../swagger/ListOptions";
import {SortOptions} from "../swagger/SortOptions";
import {GenericListRequest} from "../swagger/GenericListRequest";
import Moment = moment.Moment;

/**
 * General Utility functions.
 */
@Injectable()
export class ApiHelper {
    public static HMAC_KEY: string = 'c51876d00475b8e45dec63af368017dad1939752';
    public static isLoaded = false;

    public static DEFAULT_SERVER_ADDRESS = ApiConfig.getDefaultServerAddress();
    public static DEFAULT_SECURE_SERVER_ADDRESS = ApiConfig.getDefaultSecureServerAddress();
    public serverData;

    public static DEFAULT_ADMIN_REDIRECT_URL = "/login/new";
    public static DEFAULT_ENDUSER_REDIRECT_URL = "/naclogin";
    public static SERVER_INVALID_SESSION = 1011;
    public startUpDate: Date = new Date();
    //this errorcode will be returned from server when session is lost

    constructor(public sessionManager:SessionManager, public utils: Utils) { //, public baseServices:BaseServices) {
        if (ApiHelper.isLoaded) {
            throw "ApiHelper is singleton!";
        }
        ApiHelper.isLoaded = true;
    }

    genRequest<T>(dataObject: T, securityToken?: SecurityToken): any {
        let genericRequest: GenericRequest = {
            token: securityToken || this.genSecurityToken()
        };

        let request = <T>$.extend(genericRequest, dataObject);

        this.secureRequest(request);

        //this.baseServices.logger.trace(request);

        return request;
    }

    genFullListRequest(sortOptions?:SortOptions,fields?:Array<string>): GenericListRequest {
        let request = this.genRequest(<GenericListRequest>{
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0
            }
        });
        if (sortOptions) request.options.sortOptions = sortOptions;
        if (fields) request.options.fields = fields;
        return request;
    }

    genDTO(dataObject: any, removeNullFields:boolean=false): any {
        let dto: any = <BaseDTO>$.extend({
            version: 1,
            revision: 1,
            timestamp: this.utils.genTimestamp()
        }, dataObject);

        if (removeNullFields){
            for (var propName in dto) {
                if (is.not.existy(dto[propName])) {
                    delete dto[propName];
                }
            }
        }

        return dto;
    }

    genSecurityToken(): SecurityToken {
        return <SecurityToken>{
            requestId: this.genRequestID(),
            timestamp: this.utils.genTimestamp()
        }
    }

    genRequestID() {
        let reqId = ("UI" + this.utils.genUUID()).substr(0, 32);
        //this.baseServices.logger.trace("RequestID:"+reqId);
        return reqId;
    }

    secureRequest(request: GenericRequest | any) {
        let requestStr = JSON.stringify(request);
        request.digest = this.utils.hmacSHA1(requestStr, ApiHelper.HMAC_KEY);
    }

    getServerAddress() {
        let serverData = this.getServerData();
        return serverData.server
            .replace('{domain}', window.location.hostname)
            .replace('{port}', window.location.port);
    }

    setServerAddress(serverAddress: string) {
    	if(!serverAddress) return;
        var serverData = this.getServerData();

        serverData.server = serverAddress;

        if (typeof(Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.

            if ($.inArray(serverAddress, serverData.serverList) == -1) {
                serverData.serverList.push(serverAddress);
            }

            this.sessionManager.serverData = serverData;
        }

        this.serverData = serverData;
    }

    getServerData() {
        if (is.not.existy(this.serverData)) {
            let default_address = (this.isSecureConnection()? ApiHelper.DEFAULT_SECURE_SERVER_ADDRESS:ApiHelper.DEFAULT_SERVER_ADDRESS) || ApiHelper.DEFAULT_SERVER_ADDRESS;
            var serverData = {
                server: default_address,
                serverList: [default_address]
            };
            this.serverData = this.sessionManager.serverData || serverData;
            if (is.empty(this.serverData.server)) this.serverData.server = default_address;
        }

        return this.serverData;
    }

    getServerUrl() {
        return '//' + this.getServerAddress();
    }

    public getWebSocketUrl() {
        let new_uri;
        if (this.isSecureConnection()) {
            new_uri = "wss:";
        } else {
            new_uri = "ws:";
        }
        new_uri += "//" + this.getServerAddress();
        return new_uri;
    }

    getKibanaUrl() {
        return '//' + ApiConfig.getKibanaUrl();
    }

    getVersion() {
        return ApiConfig.getVersion();
    }

    getBuildDate():Date {
        return moment(ApiConfig.getBuildDate()).toDate();
    }

    getStartUpDate():Date {
        return this.startUpDate;
    }

    getServerPingAddress() {
        return this.getServerUrl() + '/prognetnm/favicon.ico?_=' + this.utils.genTimestamp().getTime();
    }

    getAuthorizationKey() {
        return ApiConfig.getAuthorizationKey() || 'Basic cHJvZ25ldDpwcm9nbmV0';
    }

    getEventsWebSocketUrl() {
        return this.getWebSocketUrl() + "/prognetnm/events";
    }

    getAlarmsWebSocketUrl() {
        return this.getWebSocketUrl() + "/prognetnm/alarms";
    }

    isSecureConnection():boolean {
        return (window.location.protocol === "https:");
    }

    copyObject(target: any, source: any) {
        $.each(source,(key,value)=>{
            target[key] = value;
        })
    }

    cloneObject(source: any) {
        return $.extend({},source);
    }
}
