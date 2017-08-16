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
import {SdnipPolicyAssignmentResponse} from "./SdnipPolicyAssignmentResponse";
import {GenericIdRequest} from "./GenericIdRequest";
import {SdnipResponse} from "./SdnipResponse";
import {SdnipPolicyAssignmentSaveRequest} from "./SdnipPolicyAssignmentSaveRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";
import {SdnipPolicyAssignmentListResponse} from "./SdnipPolicyAssignmentListResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {SdnipDefinedSetResponse} from "./SdnipDefinedSetResponse";
import {SdnipDefinedSetSaveRequest} from "./SdnipDefinedSetSaveRequest";
import {SdnipDefinedSetListResponse} from "./SdnipDefinedSetListResponse";
import {SdnipPolicyResponse} from "./SdnipPolicyResponse";
import {SdnipPolicySaveRequest} from "./SdnipPolicySaveRequest";
import {SdnipPolicyListResponse} from "./SdnipPolicyListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class SdnipPolicyApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Politika tipine göre politika detaylarının alınması için kullanılan fonksiyondur.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public sdnipPolicyAssignmentGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipPolicyAssignmentResponse> {
        const path = this.basePath('/sdnip/policy/assignment/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipPolicyAssignmentGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipPolicyAssignmentGetPOST');
        return <Observable<SdnipPolicyAssignmentResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipPolicyAssignmentGetPOST'); });
    }
    

    /**
     * Politika tipine göre politika tanımı oluşturulmasını sağlayan servis.
     * 
     * @param request Politika tipine göre politika tanımı oluşturmak için kullanılan istek veri modelidir.
     */
    public sdnipPolicyAssignmentSavePOST (request: SdnipPolicyAssignmentSaveRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipResponse> {
        const path = this.basePath('/sdnip/policy/assignment/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipPolicyAssignmentSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipPolicyAssignmentSavePOST');
        return <Observable<SdnipResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipPolicyAssignmentSavePOST'); });
    }
    

    /**
     * Arama kriterlerine uyan politika tipine göre politika tanımı bilgilerini döner.
     * 
     * @param request Politika tipine göre politika tanımı arama kriterlerini tutan veri modelidir.
     */
    public sdnipPolicyAssignmentSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipPolicyAssignmentListResponse> {
        const path = this.basePath('/sdnip/policy/assignment/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipPolicyAssignmentSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipPolicyAssignmentSearchPOST');
        return <Observable<SdnipPolicyAssignmentListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipPolicyAssignmentSearchPOST'); });
    }
    

    /**
     * Sdnip liste tanımı silmek için kullanılan servistir.
     * 
     * @param request Silinmesi istenen liste tanımı numara bilgisi.
     */
    public sdnipPolicyDefinedSetDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipResponse> {
        const path = this.basePath('/sdnip/policy/defined/set/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipPolicyDefinedSetDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipPolicyDefinedSetDeletePOST');
        return <Observable<SdnipResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipPolicyDefinedSetDeletePOST'); });
    }
    

    /**
     * Sdnip liste tanımı detaylarının alınması için kullanılan fonksiyondur.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public sdnipPolicyDefinedSetGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipDefinedSetResponse> {
        const path = this.basePath('/sdnip/policy/defined/set/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipPolicyDefinedSetGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipPolicyDefinedSetGetPOST');
        return <Observable<SdnipDefinedSetResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipPolicyDefinedSetGetPOST'); });
    }
    

    /**
     * Sdnip liste tanımı oluşturulmasını sağlayan servis.
     * 
     * @param request Yeni sdnip liste tanımı oluşturmak için kullanılan istek veri modelidir.
     */
    public sdnipPolicyDefinedSetSavePOST (request: SdnipDefinedSetSaveRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipResponse> {
        const path = this.basePath('/sdnip/policy/defined/set/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipPolicyDefinedSetSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipPolicyDefinedSetSavePOST');
        return <Observable<SdnipResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipPolicyDefinedSetSavePOST'); });
    }
    

    /**
     * Arama kriterlerine uyan Sdnip liste tanımı bilgilerini döner.
     * 
     * @param request Sdnip liste tanımı arama kriterlerini tutan veri modelidir.
     */
    public sdnipPolicyDefinedSetSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipDefinedSetListResponse> {
        const path = this.basePath('/sdnip/policy/defined/set/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipPolicyDefinedSetSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipPolicyDefinedSetSearchPOST');
        return <Observable<SdnipDefinedSetListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipPolicyDefinedSetSearchPOST'); });
    }
    

    /**
     * Sdnip politika silmek için kullanılan servistir.
     * 
     * @param request Silinmesi istenen politika numara bilgisi.
     */
    public sdnipPolicyDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipResponse> {
        const path = this.basePath('/sdnip/policy/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipPolicyDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipPolicyDeletePOST');
        return <Observable<SdnipResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipPolicyDeletePOST'); });
    }
    

    /**
     * Sdnip Politika detaylarının alınması için kullanılan fonksiyondur.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public sdnipPolicyGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipPolicyResponse> {
        const path = this.basePath('/sdnip/policy/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipPolicyGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipPolicyGetPOST');
        return <Observable<SdnipPolicyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipPolicyGetPOST'); });
    }
    

    /**
     * Sdnip politika oluşturulmasını sağlayan servis.
     * 
     * @param request Yeni sdnip politika oluşturmak için kullanılan istek veri modelidir.
     */
    public sdnipPolicySavePOST (request: SdnipPolicySaveRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipResponse> {
        const path = this.basePath('/sdnip/policy/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipPolicySavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipPolicySavePOST');
        return <Observable<SdnipResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipPolicySavePOST'); });
    }
    

    /**
     * Arama kriterlerine uyan Sdnip politika bilgilerini döner.
     * 
     * @param request Sdnip politika arama kriterlerini tutan veri modelidir.
     */
    public sdnipPolicySearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipPolicyListResponse> {
        const path = this.basePath('/sdnip/policy/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipPolicySearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipPolicySearchPOST');
        return <Observable<SdnipPolicyListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipPolicySearchPOST'); });
    }
    

}

