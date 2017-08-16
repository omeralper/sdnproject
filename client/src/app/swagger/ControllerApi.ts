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
import {PrognetDeviceListResponse} from "./PrognetDeviceListResponse";
import {GenericSearchRequest} from "./GenericSearchRequest";
import {ControllerNodeResponse} from "./ControllerNodeResponse";
import {GenericIdRequest} from "./GenericIdRequest";
import {ControllerNodeRequest} from "./ControllerNodeRequest";
import {ControllerNodeListResponse} from "./ControllerNodeListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class ControllerApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Kontrolcüye bağlı OVS ve OpenFlow cihazların listesini döner.
     * 
     * @param request Kontrolcüye bağlı cihazları listeleme istek nesnesi.
     */
    public controllerDeviceSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PrognetDeviceListResponse> {
        const path = this.basePath('/ctrl/controller/device/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling controllerDeviceSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('controllerDeviceSearchPOST');
        return <Observable<PrognetDeviceListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('controllerDeviceSearchPOST'); });
    }
    

    /**
     * Kontrolcü düğümü kapsamının ayrıntılarını döker.
     * 
     * @param request Kontrolcü düğümü isteğinin ayrıntılarının bulunduğu veri yapısıdır.
     */
    public controllerGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ControllerNodeResponse> {
        const path = this.basePath('/ctrl/controller/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling controllerGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('controllerGetPOST');
        return <Observable<ControllerNodeResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('controllerGetPOST'); });
    }
    

    /**
     * Kontrolcü düğümü kapsam verilerinin saklanmasını ve güncellenmesini sağlar.
     * 
     * @param request Kontrolcü düğümü kapsam veri transfer modelini taşıyan istek nesnesidir.
     */
    public controllerSavePOST (request: ControllerNodeRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ControllerNodeResponse> {
        const path = this.basePath('/ctrl/controller/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling controllerSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('controllerSavePOST');
        return <Observable<ControllerNodeResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('controllerSavePOST'); });
    }
    

    /**
     * Sistemdeki tüm Kontrolcü düğümü kapsamlarının listesini döner.
     * 
     * @param request Kontrolcü düğümü kapsamlarını listeleme istek nesnesi.
     */
    public controllerSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ControllerNodeListResponse> {
        const path = this.basePath('/ctrl/controller/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling controllerSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('controllerSearchPOST');
        return <Observable<ControllerNodeListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('controllerSearchPOST'); });
    }
    

}

