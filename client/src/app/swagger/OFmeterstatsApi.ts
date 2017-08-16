'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {GenericResponse} from "./GenericResponse";
import {MeterStatsListResponse} from "./MeterStatsListResponse";
import {MeterIdListRequest} from "./MeterIdListRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class OFmeterstatsApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * OF meter istatistik verilerinin alınmasını sağlayan fonksiyon.
     * 
     * @param request OF meter kimlik listesini iletmek için kullanılan veri yapısı.
     */
    public meterStatsMeterPOST (request: MeterIdListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MeterStatsListResponse> {
        const path = this.basePath('/ctrl/meter_stats/meter');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling meterStatsMeterPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('meterStatsMeterPOST');
        return <Observable<MeterStatsListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('meterStatsMeterPOST'); });
    }
    

}

