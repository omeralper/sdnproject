'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {FlowStatsListResponse} from "./FlowStatsListResponse";
import {UserFlowStatRequest} from "./UserFlowStatRequest";
import {GenericResponse} from "./GenericResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class FlowStatisticsApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * 5-tuple akış istatistiklerinin kullanıcıya göre sorgulanması.
     * 
     * @param request İstenen kullanıcı istatistiklerinin tanımı.
     */
    public flowStatsUserPOST (request: UserFlowStatRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<FlowStatsListResponse> {
        const path = this.basePath('/ctrl/flow_stats/user');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling flowStatsUserPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('flowStatsUserPOST');
        return <Observable<FlowStatsListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('flowStatsUserPOST'); });
    }
    

}

