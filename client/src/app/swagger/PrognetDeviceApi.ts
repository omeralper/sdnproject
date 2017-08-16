'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {PrognetDeviceResponse} from "./PrognetDeviceResponse";
import {GenericResponse} from "./GenericResponse";
import {PrognetDeviceRequest} from "./PrognetDeviceRequest";
import {ControllerNodeListResponse} from "./ControllerNodeListResponse";
import {GenericSearchRequest} from "./GenericSearchRequest";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {PrognetDeviceListRequest} from "./PrognetDeviceListRequest";
import {PrognetDeviceListResponse} from "./PrognetDeviceListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class PrognetDeviceApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * OVS veya OpenFlow cihazlar ile kontrolcüleri birbirine atama metodu.
     * 
     * @param request ID&#39;si belirtilen OVS - OpenFlow cihazları veya kontrolcüleri atar.
     */
    public controllerDeviceAssignPOST (request: PrognetDeviceRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PrognetDeviceResponse> {
        const path = this.basePath('/ctrl/controller/device/assign');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling controllerDeviceAssignPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('controllerDeviceAssignPOST');
        return <Observable<PrognetDeviceResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('controllerDeviceAssignPOST'); });
    }
    

    /**
     * OVS veya OpenFlow cihazlar ile kontrolcülerin atamalarını kaldırma metodu.
     * 
     * @param request ID&#39;si belirtilen OVS - OpenFlow cihazları veya kontrolcülerin atamalarını kaldırır.
     */
    public controllerDeviceUnassignPOST (request: PrognetDeviceRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PrognetDeviceResponse> {
        const path = this.basePath('/ctrl/controller/device/unassign');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling controllerDeviceUnassignPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('controllerDeviceUnassignPOST');
        return <Observable<PrognetDeviceResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('controllerDeviceUnassignPOST'); });
    }
    

    /**
     * Gönderilen OVS veya OpenFlow Cihazın bağlı olduğu kontrolcülerin listesini döner.
     * 
     * @param request Cihaza bağlı kontrolcüleri listeleme istek nesnesi.
     */
    public deviceControllerSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ControllerNodeListResponse> {
        const path = this.basePath('/ctrl/device/controller/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling deviceControllerSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('deviceControllerSearchPOST');
        return <Observable<ControllerNodeListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('deviceControllerSearchPOST'); });
    }
    

    /**
     * ID&#39;si belirtilen OVS veya OpenFlow cihazı siler.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısıdır.
     */
    public deviceDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PrognetDeviceResponse> {
        const path = this.basePath('/ctrl/device/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling deviceDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('deviceDeletePOST');
        return <Observable<PrognetDeviceResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('deviceDeletePOST'); });
    }
    

    /**
     * ID numarası verilen OVS ve OpenFlow anahtarlayıcıyı getirir.
     * 
     * @param request Anahtarlayıcı get isteğinin ayrıntılarının bulunduğu veri yapısıdır.
     */
    public deviceGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PrognetDeviceResponse> {
        const path = this.basePath('/ctrl/device/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling deviceGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('deviceGetPOST');
        return <Observable<PrognetDeviceResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('deviceGetPOST'); });
    }
    

    /**
     * OVS veya OpenFlow cihazlara toplu olarak grup atama metodu.
     * 
     * @param request ID&#39;si belirtilen OVS - OpenFlow cihazlara gruplarını atar.
     */
    public deviceGroupPOST (request: PrognetDeviceListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PrognetDeviceListResponse> {
        const path = this.basePath('/ctrl/device/group');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling deviceGroupPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('deviceGroupPOST');
        return <Observable<PrognetDeviceListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('deviceGroupPOST'); });
    }
    

    /**
     * Anahtarlayıcı ekleme metodu.
     * 
     * @param request OVS ve OpenFlow Anahtarlayıcıların ekleme isteğinin belirtildiği veri yapısıdır.
     */
    public deviceSavePOST (request: PrognetDeviceRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PrognetDeviceResponse> {
        const path = this.basePath('/ctrl/device/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling deviceSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('deviceSavePOST');
        return <Observable<PrognetDeviceResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('deviceSavePOST'); });
    }
    

    /**
     * Sistemdeki OVS ve OpenFlow cihazların listesini döner.
     * 
     * @param request Sistemdeki cihazları listeleme istek nesnesi.
     */
    public deviceSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PrognetDeviceListResponse> {
        const path = this.basePath('/ctrl/device/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling deviceSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('deviceSearchPOST');
        return <Observable<PrognetDeviceListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('deviceSearchPOST'); });
    }
    

}

