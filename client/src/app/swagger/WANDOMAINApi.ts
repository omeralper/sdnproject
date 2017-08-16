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
import {MultipleWanDomainListRequest} from "./MultipleWanDomainListRequest";
import {WanDomainListResponse} from "./WanDomainListResponse";
import {WanDomainResponse} from "./WanDomainResponse";
import {GenericRequest} from "./GenericRequest";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {GenericListRequest} from "./GenericListRequest";
import {WanDomainRequest} from "./WanDomainRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class WANDOMAINApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Alan tanımı verilerinin saklanmasını sağlayan fonksiyondur.
     * Alan tanımı verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID boş olması durumunda Insert işlemi yapılmalıdır.
     * @param request Alan tanımı veri transfer modelini taşıyan istek nesnesi.
     */
    public wanConfigurationWanDomainBulkSavePOST (request: MultipleWanDomainListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanDomainListResponse> {
        const path = this.basePath('/ctrl/wanConfiguration/wan_domain/bulkSave');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanConfigurationWanDomainBulkSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanConfigurationWanDomainBulkSavePOST');
        return <Observable<WanDomainListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanConfigurationWanDomainBulkSavePOST'); });
    }
    

    /**
     * Kontrolcünün kendi alan tanımı detaylarının alındığı fonksiyon.
     * 
     * @param request Genel istek yapılmasını sağlayan veri modeli.
     */
    public wanConfigurationWanDomainCurrentPOST (request: GenericRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanDomainResponse> {
        const path = this.basePath('/ctrl/wanConfiguration/wan_domain/current');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanConfigurationWanDomainCurrentPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanConfigurationWanDomainCurrentPOST');
        return <Observable<WanDomainResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanConfigurationWanDomainCurrentPOST'); });
    }
    

    /**
     * İstenen alan tanımı&#39;ın silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public wanConfigurationWanDomainDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanDomainResponse> {
        const path = this.basePath('/ctrl/wanConfiguration/wan_domain/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanConfigurationWanDomainDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanConfigurationWanDomainDeletePOST');
        return <Observable<WanDomainResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanConfigurationWanDomainDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak alan tanımı detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public wanConfigurationWanDomainGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanDomainResponse> {
        const path = this.basePath('/ctrl/wanConfiguration/wan_domain/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanConfigurationWanDomainGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanConfigurationWanDomainGetPOST');
        return <Observable<WanDomainResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanConfigurationWanDomainGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm alan tanımları&#39;ın listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public wanConfigurationWanDomainListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanDomainListResponse> {
        const path = this.basePath('/ctrl/wanConfiguration/wan_domain/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanConfigurationWanDomainListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanConfigurationWanDomainListPOST');
        return <Observable<WanDomainListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanConfigurationWanDomainListPOST'); });
    }
    

    /**
     * Alan tanımı verilerinin saklanmasını sağlayan fonksiyondur.
     * Alan tanımı verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID boş olması durumunda Insert işlemi yapılmalıdır.
     * @param request Alan tanımı veri transfer modelini taşıyan istek nesnesi.
     */
    public wanConfigurationWanDomainSavePOST (request: WanDomainRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanDomainResponse> {
        const path = this.basePath('/ctrl/wanConfiguration/wan_domain/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanConfigurationWanDomainSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanConfigurationWanDomainSavePOST');
        return <Observable<WanDomainResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanConfigurationWanDomainSavePOST'); });
    }
    

    /**
     * Sistemdeki alan tanımı verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public wanConfigurationWanDomainSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanDomainListResponse> {
        const path = this.basePath('/ctrl/wanConfiguration/wan_domain/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanConfigurationWanDomainSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanConfigurationWanDomainSearchPOST');
        return <Observable<WanDomainListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanConfigurationWanDomainSearchPOST'); });
    }
    

}

