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
import {GenericIdListRequest} from "./GenericIdListRequest";
import {HostStatsListResponse} from "./HostStatsListResponse";
import {LinkStatsListResponse} from "./LinkStatsListResponse";
import {PortStatsListResponse} from "./PortStatsListResponse";
import {SwitchStatsListResponse} from "./SwitchStatsListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class StatsApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Uç Birim üzerindeki istatistik verilerinin alınmasını sağlayan fonksiyon.
     * 
     * @param request Uç Birim ID listesini iletmek için kullanılan veri yapısı.
     */
    public hostStatsHostPOST (request: GenericIdListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<HostStatsListResponse> {
        const path = this.basePath('/ctrl/host_stats/host');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling hostStatsHostPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('hostStatsHostPOST');
        return <Observable<HostStatsListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('hostStatsHostPOST'); });
    }
    

    /**
     * Bağlantı üzerindeki istatistik verilerinin alınmasını sağlayan fonksiyon.
     * 
     * @param request Bağlantı ID listesini iletmek için kullanılan veri yapısı.
     */
    public linkStatsLinkPOST (request: GenericIdListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<LinkStatsListResponse> {
        const path = this.basePath('/ctrl/link_stats/link');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling linkStatsLinkPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('linkStatsLinkPOST');
        return <Observable<LinkStatsListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('linkStatsLinkPOST'); });
    }
    

    /**
     * Anahtarlayıcının portlarının istatistik verilerinin alınmasını sağlayan fonksiyon.
     * 
     * @param request Anahtarlayıcıların ID listesini iletmek için kullanılan veri yapısı.
     */
    public portStatsPortPOST (request: GenericIdListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PortStatsListResponse> {
        const path = this.basePath('/ctrl/port_stats/port');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling portStatsPortPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('portStatsPortPOST');
        return <Observable<PortStatsListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('portStatsPortPOST'); });
    }
    

    /**
     * Anahtarlayıcılar üzerindeki istatistik verilerinin alınmasını sağlayan fonksiyon.
     * 
     * @param request Anahtarlayıcıların ID listesini iletmek için kullanılan veri yapısı.
     */
    public portStatsSwitchPOST (request: GenericIdListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SwitchStatsListResponse> {
        const path = this.basePath('/ctrl/port_stats/switch');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling portStatsSwitchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('portStatsSwitchPOST');
        return <Observable<SwitchStatsListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('portStatsSwitchPOST'); });
    }
    

}

