'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {WanAlarmInfoListResponse} from "./WanAlarmInfoListResponse";
import {GenericResponse} from "./GenericResponse";
import {GenericListRequest} from "./GenericListRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class WanAlarmInfoApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Sistemdeki tüm geniş alanların alarm listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public wanAlarmListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanAlarmInfoListResponse> {
        const path = this.basePath('/ctrl/wanAlarm/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanAlarmListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanAlarmListPOST');
        return <Observable<WanAlarmInfoListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanAlarmListPOST'); });
    }
    

}

