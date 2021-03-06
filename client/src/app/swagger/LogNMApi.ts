'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {LogLevelListResponse} from "./LogLevelListResponse";
import {GenericResponse} from "./GenericResponse";
import {LogLevelListRequest} from "./LogLevelListRequest";
import {LogLevelRequest} from "./LogLevelRequest";
import {LogLevelResponse} from "./LogLevelResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class LogNMApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Günlük mesajların seviyelerinin kullanıcı arayüzü tarafından listelenmesi için kullanılır. (prognet-nm sürümü)
     * 
     * @param request Günlük verilerin seviyelerinin bulunduğu veri yapısı
     */
    public logLevelListPOST (request: LogLevelListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<LogLevelListResponse> {
        const path = this.basePath('/capi/log/levelList');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling logLevelListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('logLevelListPOST');
        return <Observable<LogLevelListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('logLevelListPOST'); });
    }
    

    /**
     * Günlük mesajların seviyelerinin kullanıcı arayüzü tarafından değiştirilebilmesi için kullanılır. (prognet-nm sürümü)
     * 
     * @param request Günlük verilerin seviyelerinin bulunduğu veri yapısı
     */
    public logLevelUpdatePOST (request: LogLevelRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<LogLevelResponse> {
        const path = this.basePath('/capi/log/levelUpdate');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling logLevelUpdatePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('logLevelUpdatePOST');
        return <Observable<LogLevelResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('logLevelUpdatePOST'); });
    }
    

}

