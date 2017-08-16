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
import {MetricNames} from "./MetricNames";
import {MetricDefinitions} from "./MetricDefinitions";
import {MetricAndTagPrefixes} from "./MetricAndTagPrefixes";
import {MetricAndTagNames} from "./MetricAndTagNames";
import {TsdbQueryResponse} from "./TsdbQueryResponse";
import {TsdbQueryRequest} from "./TsdbQueryRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class TSDBApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Zaman serisi veritabanındaki metriklerin sorgulanması
     * 
     * @param request Metrik sorgu parametreleri
     */
    public tsdbMetricDefinitionPOST (request: MetricNames, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MetricDefinitions> {
        const path = this.basePath('/ctrl/tsdb/metricDefinition');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling tsdbMetricDefinitionPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('tsdbMetricDefinitionPOST');
        return <Observable<MetricDefinitions>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('tsdbMetricDefinitionPOST'); });
    }
    

    /**
     * Zaman serisi veritabanındaki metriklerin ve taglerin listesi
     * 
     * @param request Metrik ve tag listelerinin istenmaesi
     */
    public tsdbMetricsNtagsPOST (request: MetricAndTagPrefixes, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MetricAndTagNames> {
        const path = this.basePath('/ctrl/tsdb/metricsNtags');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling tsdbMetricsNtagsPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('tsdbMetricsNtagsPOST');
        return <Observable<MetricAndTagNames>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('tsdbMetricsNtagsPOST'); });
    }
    

    /**
     * Zaman serisi veritabanındaki metriklerin sorgulanması
     * 
     * @param request Metrik sorgu parametreleri
     */
    public tsdbQueryPOST (request: TsdbQueryRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<TsdbQueryResponse> {
        const path = this.basePath('/ctrl/tsdb/query');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling tsdbQueryPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('tsdbQueryPOST');
        return <Observable<TsdbQueryResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('tsdbQueryPOST'); });
    }
    

}

