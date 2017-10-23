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
import {ProactivePathPolicyResponse} from "./ProactivePathPolicyResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {ProactivePathPolicyRequest} from "./ProactivePathPolicyRequest";
import {ProactivePathPolicyListResponse} from "./ProactivePathPolicyListResponse";
import {GenericListRequest} from "./GenericListRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class ProactivePathPolicyApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Istenen proaktif patika politikasının silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public proactiveDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ProactivePathPolicyResponse> {
        const path = this.basePath('/ctrl/proactive/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling proactiveDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('proactiveDeletePOST');
        return <Observable<ProactivePathPolicyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('proactiveDeletePOST'); });
    }
    

    /**
     * Proaktif patika politikasının detaylarının alınması için kullanılan fonksiyondur.
     * 
     * @param request Proaktif patika politikası isteğinin detaylarının bulunduğu veri yapısı.
     */
    public proactiveGetPOST (request: ProactivePathPolicyRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ProactivePathPolicyResponse> {
        const path = this.basePath('/ctrl/proactive/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling proactiveGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('proactiveGetPOST');
        return <Observable<ProactivePathPolicyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('proactiveGetPOST'); });
    }
    

    /**
     * Proaktif patika akışlarının listesini döner.
     * 
     * @param request Sanal ağ talebi için kullanılacak veri modelidir.
     */
    public proactiveListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ProactivePathPolicyListResponse> {
        const path = this.basePath('/ctrl/proactive/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling proactiveListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('proactiveListPOST');
        return <Observable<ProactivePathPolicyListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('proactiveListPOST'); });
    }
    

    /**
     * Proaktif patika politikaların saklanmasını sağlayan fonksiyondur.
     * Proaktif patika politikaların saklanmasını sağlayan fonksiyondur.
     * @param request Proaktif patika politika veri transfer modelini taşıyan istek nesnesi.
     */
    public proactiveSavePOST (request: ProactivePathPolicyRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ProactivePathPolicyResponse> {
        const path = this.basePath('/ctrl/proactive/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling proactiveSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('proactiveSavePOST');
        return <Observable<ProactivePathPolicyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('proactiveSavePOST'); });
    }
    

    /**
     * Proaktif patika akışlarının sorgu sonucunu döner.
     * 
     * @param request Sanal ağ talebi için kullanılacak veri modelidir.
     */
    public proactiveSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ProactivePathPolicyListResponse> {
        const path = this.basePath('/ctrl/proactive/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling proactiveSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('proactiveSearchPOST');
        return <Observable<ProactivePathPolicyListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('proactiveSearchPOST'); });
    }
    

}

