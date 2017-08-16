'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {TopologyRequest} from "./TopologyRequest";
import {GenericResponse} from "./GenericResponse";
import {SubTopologyResponse} from "./SubTopologyResponse";
import {GenericIdRequest} from "./GenericIdRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class SubTopologyApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Talep edilen sanal ağ topolojisinin fiziksel karşılığının alınması için kullanılan fonksiyondur.
     * 
     * @param request Talep edilen topoloji isteğinin detaylarının bulunduğu veri yapısı.
     */
    public mvtnRequestGetSubPOST (request: TopologyRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SubTopologyResponse> {
        const path = this.basePath('/ctrl/mvtnRequest/get/sub');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling mvtnRequestGetSubPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('mvtnRequestGetSubPOST');
        return <Observable<SubTopologyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('mvtnRequestGetSubPOST'); });
    }
    

    /**
     * Sanal ağ topolojisinin fiziksel karşılığının alınması için kullanılan fonksiyondur.
     * 
     * @param request Topoloji isteğinin detaylarının bulunduğu veri yapısı.
     */
    public topologyGetSubPOST (request: TopologyRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SubTopologyResponse> {
        const path = this.basePath('/ctrl/topology/get/sub');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologyGetSubPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologyGetSubPOST');
        return <Observable<SubTopologyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologyGetSubPOST'); });
    }
    

    /**
     * Sanal ağ topolojisinin fiziksel karşılığının alınması için kullanılan fonksiyondur.
     * 
     * @param request Topoloji isteğinin detaylarının bulunduğu veri yapısı.
     */
    public virtualGetSubPOST (request: TopologyRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SubTopologyResponse> {
        const path = this.basePath('/ctrl/virtual/get/sub');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualGetSubPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualGetSubPOST');
        return <Observable<SubTopologyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualGetSubPOST'); });
    }
    

    /**
     * Sanal ağın alternatif fiziksel karşılığındaki topolojilerden birini seçme ve kaydetme isteğini yapar.
     * 
     * @param request Sanal ağ fiziksel karşılık topolojisini kaydetme isteğini gerçekleştiren veri modelidir.
     */
    public virtualSaveSubPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SubTopologyResponse> {
        const path = this.basePath('/ctrl/virtual/save/sub');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualSaveSubPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualSaveSubPOST');
        return <Observable<SubTopologyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualSaveSubPOST'); });
    }
    

}

