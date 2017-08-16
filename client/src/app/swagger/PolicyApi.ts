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
import {EndUserApplicationResponse} from "./EndUserApplicationResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {GenericListRequest} from "./GenericListRequest";
import {EndUserApplicationListResponse} from "./EndUserApplicationListResponse";
import {EndUserApplicationRequest} from "./EndUserApplicationRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";
import {AccessPolicyCountResponse} from "./AccessPolicyCountResponse";
import {ApiCoreRequest} from "./ApiCoreRequest";
import {AccessPolicyResponse} from "./AccessPolicyResponse";
import {AccessPolicyListResponse} from "./AccessPolicyListResponse";
import {AccessPolicyRequest} from "./AccessPolicyRequest";
import {AccessProfileCountResponse} from "./AccessProfileCountResponse";
import {AccessProfileResponse} from "./AccessProfileResponse";
import {AccessProfileListResponse} from "./AccessProfileListResponse";
import {AccessProfileRequest} from "./AccessProfileRequest";
import {ServiceActionResponse} from "./ServiceActionResponse";
import {ServiceActionListResponse} from "./ServiceActionListResponse";
import {ServiceActionRequest} from "./ServiceActionRequest";
import {ServicePolicyClassResponse} from "./ServicePolicyClassResponse";
import {ServicePolicyClassListResponse} from "./ServicePolicyClassListResponse";
import {ServicePolicyClassRequest} from "./ServicePolicyClassRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class PolicyApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Son kullanıcı uygulamasının silinmesi için kullanılan fonksiyondur
     * Son kullanıcı uygulamasının silinmesi için sunucuya yapılan servis modelidir.
     * @param request Genel ID değeri silme isteği yapılmasını sağlayan veri modeli.
     */
    public endUserAppDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EndUserApplicationResponse> {
        const path = this.basePath('/ctrl/endUserApp/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling endUserAppDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('endUserAppDeletePOST');
        return <Observable<EndUserApplicationResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('endUserAppDeletePOST'); });
    }
    

    /**
     * Son kullanıcı uygulamasının alınması için kullanılan fonksiyondur
     * Son kullanıcı uygulamasının alınması için sunucuya yapılan servis modelidir.
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public endUserAppGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EndUserApplicationResponse> {
        const path = this.basePath('/ctrl/endUserApp/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling endUserAppGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('endUserAppGetPOST');
        return <Observable<EndUserApplicationResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('endUserAppGetPOST'); });
    }
    

    /**
     * Son kullanıcı uygulama listesinin alınması için kullanılan fonksiyondur
     * Son kullanıcı uygulama listesinin alınması için sunucuya yapılan servis modelidir.
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public endUserAppListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EndUserApplicationListResponse> {
        const path = this.basePath('/ctrl/endUserApp/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling endUserAppListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('endUserAppListPOST');
        return <Observable<EndUserApplicationListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('endUserAppListPOST'); });
    }
    

    /**
     * Son kullanıcı uygulamasının saklanması için kullanılan fonksiyondur
     * Son kullanıcı uygulamasının saklanması için sunucuya yapılan servis modelidir.
     * @param request Son kullanıcı uygulama modelini taşıyan istek nesnesi.
     */
    public endUserAppSavePOST (request: EndUserApplicationRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EndUserApplicationResponse> {
        const path = this.basePath('/ctrl/endUserApp/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling endUserAppSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('endUserAppSavePOST');
        return <Observable<EndUserApplicationResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('endUserAppSavePOST'); });
    }
    

    /**
     * Son kullanıcı uygulamaları arasında arama için kullanılan fonksiyondur
     * Son kullanıcı uygulamaları arasında arama yapılması için sunucuya yapılan servis modelidir.
     * @param request Genel ID değeri silme isteği yapılmasını sağlayan veri modeli.
     */
    public endUserAppSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EndUserApplicationListResponse> {
        const path = this.basePath('/ctrl/endUserApp/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling endUserAppSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('endUserAppSearchPOST');
        return <Observable<EndUserApplicationListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('endUserAppSearchPOST'); });
    }
    

    /**
     * Politika profil sayılarının dönüldüğü servis..
     * 
     * @param request Politika profillerini listelemek için kullanılacak istek veri modelidir.
     */
    public overlayPolicyCountPOST (request: ApiCoreRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AccessPolicyCountResponse> {
        const path = this.basePath('/ctrl/overlay_policy/count');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling overlayPolicyCountPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('overlayPolicyCountPOST');
        return <Observable<AccessPolicyCountResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('overlayPolicyCountPOST'); });
    }
    

    /**
     * İstenen erişim politikası&#39;ın silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public overlayPolicyDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AccessPolicyResponse> {
        const path = this.basePath('/ctrl/overlay_policy/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling overlayPolicyDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('overlayPolicyDeletePOST');
        return <Observable<AccessPolicyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('overlayPolicyDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak erişim politikası detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public overlayPolicyGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AccessPolicyResponse> {
        const path = this.basePath('/ctrl/overlay_policy/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling overlayPolicyGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('overlayPolicyGetPOST');
        return <Observable<AccessPolicyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('overlayPolicyGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm erişim politikaları&#39;ın listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public overlayPolicyListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AccessPolicyListResponse> {
        const path = this.basePath('/ctrl/overlay_policy/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling overlayPolicyListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('overlayPolicyListPOST');
        return <Observable<AccessPolicyListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('overlayPolicyListPOST'); });
    }
    

    /**
     * Erişim politikası verilerinin saklanmasını sağlayan fonksiyondur.
     * Erişim politikası verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID boş olması durumunda Insert işlemi yapılmalıdır.
     * @param request Erişim politikası veri transfer modelini taşıyan istek nesnesi.
     */
    public overlayPolicySavePOST (request: AccessPolicyRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AccessPolicyResponse> {
        const path = this.basePath('/ctrl/overlay_policy/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling overlayPolicySavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('overlayPolicySavePOST');
        return <Observable<AccessPolicyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('overlayPolicySavePOST'); });
    }
    

    /**
     * Sistemdeki erişim politikası verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public overlayPolicySearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AccessPolicyListResponse> {
        const path = this.basePath('/ctrl/overlay_policy/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling overlayPolicySearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('overlayPolicySearchPOST');
        return <Observable<AccessPolicyListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('overlayPolicySearchPOST'); });
    }
    

    /**
     * Politika profil sayılarının dönüldüğü servis..
     * 
     * @param request Politika profillerini listelemek için kullanılacak istek veri modelidir.
     */
    public policyAccessProfileCountPOST (request: ApiCoreRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AccessProfileCountResponse> {
        const path = this.basePath('/ctrl/policy/accessProfile/count');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyAccessProfileCountPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyAccessProfileCountPOST');
        return <Observable<AccessProfileCountResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyAccessProfileCountPOST'); });
    }
    

    /**
     * İstenen erişim politikası&#39;ın silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public policyAccessProfileDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AccessProfileResponse> {
        const path = this.basePath('/ctrl/policy/accessProfile/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyAccessProfileDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyAccessProfileDeletePOST');
        return <Observable<AccessProfileResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyAccessProfileDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak erişim politikası detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public policyAccessProfileGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AccessProfileResponse> {
        const path = this.basePath('/ctrl/policy/accessProfile/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyAccessProfileGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyAccessProfileGetPOST');
        return <Observable<AccessProfileResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyAccessProfileGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm erişim politikaları&#39;ın listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public policyAccessProfileListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AccessProfileListResponse> {
        const path = this.basePath('/ctrl/policy/accessProfile/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyAccessProfileListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyAccessProfileListPOST');
        return <Observable<AccessProfileListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyAccessProfileListPOST'); });
    }
    

    /**
     * Erişim politikası verilerinin saklanmasını sağlayan fonksiyondur.
     * Erişim politikası verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID boş olması durumunda Insert işlemi yapılmalıdır.
     * @param request Erişim politikası veri transfer modelini taşıyan istek nesnesi.
     */
    public policyAccessProfileSavePOST (request: AccessProfileRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AccessProfileResponse> {
        const path = this.basePath('/ctrl/policy/accessProfile/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyAccessProfileSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyAccessProfileSavePOST');
        return <Observable<AccessProfileResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyAccessProfileSavePOST'); });
    }
    

    /**
     * Sistemdeki erişim politikası verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public policyAccessProfileSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AccessProfileListResponse> {
        const path = this.basePath('/ctrl/policy/accessProfile/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyAccessProfileSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyAccessProfileSearchPOST');
        return <Observable<AccessProfileListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyAccessProfileSearchPOST'); });
    }
    

    /**
     * İstenen hizmet aksiyonu&#39;ın silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public policyServiceActionDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ServiceActionResponse> {
        const path = this.basePath('/ctrl/policy/serviceAction/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyServiceActionDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyServiceActionDeletePOST');
        return <Observable<ServiceActionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyServiceActionDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak hizmet aksiyonu detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public policyServiceActionGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ServiceActionResponse> {
        const path = this.basePath('/ctrl/policy/serviceAction/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyServiceActionGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyServiceActionGetPOST');
        return <Observable<ServiceActionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyServiceActionGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm hizmet aksiyonları&#39;ın listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public policyServiceActionListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ServiceActionListResponse> {
        const path = this.basePath('/ctrl/policy/serviceAction/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyServiceActionListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyServiceActionListPOST');
        return <Observable<ServiceActionListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyServiceActionListPOST'); });
    }
    

    /**
     * Hizmet aksiyonu verilerinin saklanmasını sağlayan fonksiyondur.
     * Hizmet aksiyonu verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID boş olması durumunda Insert işlemi yapılmalıdır.
     * @param request Hizmet aksiyonu veri transfer modelini taşıyan istek nesnesi.
     */
    public policyServiceActionSavePOST (request: ServiceActionRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ServiceActionResponse> {
        const path = this.basePath('/ctrl/policy/serviceAction/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyServiceActionSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyServiceActionSavePOST');
        return <Observable<ServiceActionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyServiceActionSavePOST'); });
    }
    

    /**
     * Sistemdeki hizmet aksiyonu verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public policyServiceActionSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ServiceActionListResponse> {
        const path = this.basePath('/ctrl/policy/serviceAction/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyServiceActionSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyServiceActionSearchPOST');
        return <Observable<ServiceActionListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyServiceActionSearchPOST'); });
    }
    

    /**
     * İstenen trafik sınıfı&#39;ın silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public policyServiceClassDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ServicePolicyClassResponse> {
        const path = this.basePath('/ctrl/policy/serviceClass/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyServiceClassDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyServiceClassDeletePOST');
        return <Observable<ServicePolicyClassResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyServiceClassDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak trafik sınıfı detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public policyServiceClassGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ServicePolicyClassResponse> {
        const path = this.basePath('/ctrl/policy/serviceClass/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyServiceClassGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyServiceClassGetPOST');
        return <Observable<ServicePolicyClassResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyServiceClassGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm trafik sınıfları&#39;ın listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public policyServiceClassListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ServicePolicyClassListResponse> {
        const path = this.basePath('/ctrl/policy/serviceClass/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyServiceClassListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyServiceClassListPOST');
        return <Observable<ServicePolicyClassListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyServiceClassListPOST'); });
    }
    

    /**
     * Trafik sınıfı verilerinin saklanmasını sağlayan fonksiyondur.
     * Trafik sınıfı verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID boş olması durumunda Insert işlemi yapılmalıdır.
     * @param request Trafik sınıfı veri transfer modelini taşıyan istek nesnesi.
     */
    public policyServiceClassSavePOST (request: ServicePolicyClassRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ServicePolicyClassResponse> {
        const path = this.basePath('/ctrl/policy/serviceClass/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyServiceClassSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyServiceClassSavePOST');
        return <Observable<ServicePolicyClassResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyServiceClassSavePOST'); });
    }
    

    /**
     * Sistemdeki trafik sınıfı verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public policyServiceClassSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ServicePolicyClassListResponse> {
        const path = this.basePath('/ctrl/policy/serviceClass/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling policyServiceClassSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('policyServiceClassSearchPOST');
        return <Observable<ServicePolicyClassListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('policyServiceClassSearchPOST'); });
    }
    

}

