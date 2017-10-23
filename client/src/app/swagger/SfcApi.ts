'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {SfcResponse} from "./SfcResponse";
import {GenericResponse} from "./GenericResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {GenericListRequest} from "./GenericListRequest";
import {SfcListResponse} from "./SfcListResponse";
import {SfcRequest} from "./SfcRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class SfcApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Sfc silinmesini sağlayan fonksiyondur.
     * Sfc silinmesini sağlayan fonksiyondur.
     * @param request Genel silme talebi için kullanılacak veri modelidir.
     */
    public sfcChainDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SfcResponse> {
        const path = this.basePath('/sfc/chain/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sfcChainDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sfcChainDeletePOST');
        return <Observable<SfcResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sfcChainDeletePOST'); });
    }
    

    /**
     * Sfc dönmesini sağlayan fonksiyondur.
     * Sfc dönmesini sağlayan fonksiyondur.
     * @param request Genel getirme talebi için kullanılacak veri modelidir.
     */
    public sfcChainGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SfcResponse> {
        const path = this.basePath('/sfc/chain/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sfcChainGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sfcChainGetPOST');
        return <Observable<SfcResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sfcChainGetPOST'); });
    }
    

    /**
     * Sfc listelenmesini sağlayan fonksiyondur.
     * Sfc listelenmesini sağlayan fonksiyondur.
     * @param request Genel liste talebi için kullanılacak veri modelidir.
     */
    public sfcChainListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SfcListResponse> {
        const path = this.basePath('/sfc/chain/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sfcChainListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sfcChainListPOST');
        return <Observable<SfcListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sfcChainListPOST'); });
    }
    

    /**
     * Sfc tanımlaması için kullanılan fonksiyondur.
     * Sfc tanımlaması için kullanılan fonksiyondur.
     * @param request Sfc tanımlama modelini taşıyan istek nesnesi.
     */
    public sfcChainSavePOST (request: SfcRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SfcResponse> {
        const path = this.basePath('/sfc/chain/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sfcChainSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sfcChainSavePOST');
        return <Observable<SfcResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sfcChainSavePOST'); });
    }
    

    /**
     * Sfc arasında arama için kullanılan fonksiyondur.
     * Sfc arasında arama için kullanılan fonksiyondur.
     * @param request Genel sorgu yapılmasını sağlayan veri modeli.
     */
    public sfcChainSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SfcListResponse> {
        const path = this.basePath('/sfc/chain/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sfcChainSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sfcChainSearchPOST');
        return <Observable<SfcListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sfcChainSearchPOST'); });
    }
    

}

