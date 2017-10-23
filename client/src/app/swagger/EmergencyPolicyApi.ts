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
import {EmergencyPolicyResponse} from "./EmergencyPolicyResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {GenericListRequest} from "./GenericListRequest";
import {EmergencyPolicyListResponse} from "./EmergencyPolicyListResponse";
import {EmergencyPolicyRequest} from "./EmergencyPolicyRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class EmergencyPolicyApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Acil durum politikasının silinmesi için kullanılan fonksiyondur
     * Acil durum politikasının silinmesi için sunucuya yapılan servis modelidir.
     * @param request Genel ID değeri silme isteği yapılmasını sağlayan veri modeli.
     */
    public emergencyPolicyDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EmergencyPolicyResponse> {
        const path = this.basePath('/ctrl/emergencyPolicy/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling emergencyPolicyDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('emergencyPolicyDeletePOST');
        return <Observable<EmergencyPolicyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('emergencyPolicyDeletePOST'); });
    }
    

    /**
     * Acil durum politikasının alınması için kullanılan fonksiyondur
     * Acil durum politikasının alınması için sunucuya yapılan servis modelidir.
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public emergencyPolicyGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EmergencyPolicyResponse> {
        const path = this.basePath('/ctrl/emergencyPolicy/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling emergencyPolicyGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('emergencyPolicyGetPOST');
        return <Observable<EmergencyPolicyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('emergencyPolicyGetPOST'); });
    }
    

    /**
     * Acil durum politika listesinin alınması için kullanılan fonksiyondur
     * Son kullanıcı uygulama listesinin alınması için sunucuya yapılan servis modelidir.
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public emergencyPolicyListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EmergencyPolicyListResponse> {
        const path = this.basePath('/ctrl/emergencyPolicy/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling emergencyPolicyListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('emergencyPolicyListPOST');
        return <Observable<EmergencyPolicyListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('emergencyPolicyListPOST'); });
    }
    

    /**
     * Acil durum politikalarının saklanması için gereken fonksiyondur.
     * Acil durum politikalarının saklanması için gereken fonksiyondur.
     * @param request Acil durum politikaları modelini taşıyan istek nesnesi.
     */
    public emergencyPolicySavePOST (request: EmergencyPolicyRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EmergencyPolicyResponse> {
        const path = this.basePath('/ctrl/emergencyPolicy/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling emergencyPolicySavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('emergencyPolicySavePOST');
        return <Observable<EmergencyPolicyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('emergencyPolicySavePOST'); });
    }
    

    /**
     * Acil durum politikaları arasında arama için kullanılan fonksiyondur
     * Acil durum politikaları arasında arama yapılması için sunucuya yapılan servis modelidir.
     * @param request Genel ID değeri silme isteği yapılmasını sağlayan veri modeli.
     */
    public emergencyPolicySearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EmergencyPolicyListResponse> {
        const path = this.basePath('/ctrl/emergencyPolicy/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling emergencyPolicySearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('emergencyPolicySearchPOST');
        return <Observable<EmergencyPolicyListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('emergencyPolicySearchPOST'); });
    }
    

    /**
     * Idsi gönderilen acil durum politikalarını kullanmak için
     * Idsi gönderilen acil durum politikalarını kullanmak için
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public emergencyPolicyStartStopVnfPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EmergencyPolicyListResponse> {
        const path = this.basePath('/ctrl/emergencyPolicy/startStopVnf');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling emergencyPolicyStartStopVnfPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('emergencyPolicyStartStopVnfPOST');
        return <Observable<EmergencyPolicyListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('emergencyPolicyStartStopVnfPOST'); });
    }
    

    /**
     * Idsi bilenen acil durum politikasını çalıştırmamak için
     * Idsi bilenen acil durum politikasını çalıştırmamak için
     * @param request İstek yapılmasını sağlayan veri modeli.
     */
    public emergencyPolicyStopProcessPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EmergencyPolicyResponse> {
        const path = this.basePath('/ctrl/emergencyPolicy/stopProcess');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling emergencyPolicyStopProcessPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('emergencyPolicyStopProcessPOST');
        return <Observable<EmergencyPolicyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('emergencyPolicyStopProcessPOST'); });
    }
    

}

