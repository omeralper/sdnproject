'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {VnfrResponse} from "./VnfrResponse";
import {GenericResponse} from "./GenericResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {GenericListRequest} from "./GenericListRequest";
import {VnfrListResponse} from "./VnfrListResponse";
import {VnfrRequest} from "./VnfrRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class VnfrApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Vnfr silinmesini sağlayan fonksiyondur.
     * Vnfr silinmesini sağlayan fonksiyondur.
     * @param request Genel silme talebi için kullanılacak veri modelidir.
     */
    public sfcVnfrDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VnfrResponse> {
        const path = this.basePath('/sfc/vnfr/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sfcVnfrDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sfcVnfrDeletePOST');
        return <Observable<VnfrResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sfcVnfrDeletePOST'); });
    }
    

    /**
     * Vnfr dönmesini sağlayan fonksiyondur.
     * Vnfr dönmesini sağlayan fonksiyondur.
     * @param request Genel getirme talebi için kullanılacak veri modelidir.
     */
    public sfcVnfrGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VnfrResponse> {
        const path = this.basePath('/sfc/vnfr/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sfcVnfrGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sfcVnfrGetPOST');
        return <Observable<VnfrResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sfcVnfrGetPOST'); });
    }
    

    /**
     * Vnfr tanımlarının listelenmesini sağlayan fonksiyondur.
     * Vnfr tanımlarının listelenmesini sağlayan fonksiyondur.
     * @param request Genel liste talebi için kullanılacak veri modelidir.
     */
    public sfcVnfrListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VnfrListResponse> {
        const path = this.basePath('/sfc/vnfr/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sfcVnfrListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sfcVnfrListPOST');
        return <Observable<VnfrListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sfcVnfrListPOST'); });
    }
    

    /**
     * Vnfr tanımlaması için kullanılan fonksiyondur.
     * Vnfr tanımlaması için kullanılan fonksiyondur.
     * @param request Vnfr tanımlama modelini taşıyan istek nesnesi.
     */
    public sfcVnfrSavePOST (request: VnfrRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VnfrResponse> {
        const path = this.basePath('/sfc/vnfr/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sfcVnfrSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sfcVnfrSavePOST');
        return <Observable<VnfrResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sfcVnfrSavePOST'); });
    }
    

}

