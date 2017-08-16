'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {MonitorAlarmSetRequest} from "./MonitorAlarmSetRequest";
import {MonitorAlarmSetResponse} from "./MonitorAlarmSetResponse";
import {GenericResponse} from "./GenericResponse";
import {GenericIdListRequest} from "./GenericIdListRequest";
import {MonitorValueListResponse} from "./MonitorValueListResponse";
import {MonitorSelectListResponse} from "./MonitorSelectListResponse";
import {MonitorSelectRequest} from "./MonitorSelectRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class MonitorApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Id numarası verilen ölçer için verilen alarm kurgularını (eşik değerlerinin kurulumlarını) yapar.
     * 
     * @param request Alarm kurguları yapılacak ölçerin id numarasını taşıyan istek nesnesidir.
     */
    public monitorAlarmSetPOST (request: MonitorAlarmSetRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MonitorAlarmSetResponse> {
        const path = this.basePath('/ctrl/monitor/alarmSet');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling monitorAlarmSetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('monitorAlarmSetPOST');
        return <Observable<MonitorAlarmSetResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('monitorAlarmSetPOST'); });
    }
    

    /**
     * Kimlik (id) numaraları verilen göstergelerin değerlerini verir.
     * 
     * @param request monitorValueGet isteğinin ayrıntılarının bulunduğu veri yapısıdır.
     */
    public monitorGetPOST (request: GenericIdListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MonitorValueListResponse> {
        const path = this.basePath('/ctrl/monitor/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling monitorGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('monitorGetPOST');
        return <Observable<MonitorValueListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('monitorGetPOST'); });
    }
    

    /**
     * Göstergeler arasında verilen kriterlere uygun olanları arayarak bulduklarının bütün alanlarını döner.
     * 
     * @param request Arama kriterlerinin belirtildiği veri yapısıdır.
     */
    public monitorSelectPOST (request: MonitorSelectRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MonitorSelectListResponse> {
        const path = this.basePath('/ctrl/monitor/select');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling monitorSelectPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('monitorSelectPOST');
        return <Observable<MonitorSelectListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('monitorSelectPOST'); });
    }
    

}

