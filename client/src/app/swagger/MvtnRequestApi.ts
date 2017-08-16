'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {MvtnEditChangeRequest} from "./MvtnEditChangeRequest";
import {MvtnEditChangeResponse} from "./MvtnEditChangeResponse";
import {GenericResponse} from "./GenericResponse";
import {TopologyResponse} from "./TopologyResponse";
import {MvtnRequestDeleteRequest} from "./MvtnRequestDeleteRequest";
import {TopologyRequest} from "./TopologyRequest";
import {MvtnCreateRequest} from "./MvtnCreateRequest";
import {MvtnRequestListResponse} from "./MvtnRequestListResponse";
import {MvtnCreateRequestResponse} from "./MvtnCreateRequestResponse";
import {GenericSearchRequest} from "./GenericSearchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class MvtnRequestApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * İstenen sanal ağ talebinin durumunu değiştirir.
     * 
     * @param request Sanal ağ taleplerinin durumlarını değiştirmek için kullanılacak veri modelidir.
     */
    public mvtnRequestChangeEditStatusPOST (request: MvtnEditChangeRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MvtnEditChangeResponse> {
        const path = this.basePath('/ctrl/mvtnRequest/changeEditStatus');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling mvtnRequestChangeEditStatusPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('mvtnRequestChangeEditStatusPOST');
        return <Observable<MvtnEditChangeResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('mvtnRequestChangeEditStatusPOST'); });
    }
    

    /**
     * Istenen talep topolojilerinin silinmesini saglayan fonksiyon.
     * 
     * @param request Talepteki sanal ağları silme isteğinin belirtildiği veri yapısı.
     */
    public mvtnRequestDeletePOST (request: MvtnRequestDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<TopologyResponse> {
        const path = this.basePath('/ctrl/mvtnRequest/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling mvtnRequestDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('mvtnRequestDeletePOST');
        return <Observable<TopologyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('mvtnRequestDeletePOST'); });
    }
    

    /**
     * Talep edilen ağ topolojisinin detaylarının alınması için kullanılan fonksiyondur.
     * 
     * @param request Talep edilen topoloji isteğinin detaylarının bulunduğu veri yapısı.
     */
    public mvtnRequestGetPOST (request: TopologyRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<TopologyResponse> {
        const path = this.basePath('/ctrl/mvtnRequest/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling mvtnRequestGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('mvtnRequestGetPOST');
        return <Observable<TopologyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('mvtnRequestGetPOST'); });
    }
    

    /**
     * Sanal ağ taleplerinin listesini döner.
     * 
     * @param request Sanal ağ taleplerini listeleme talebi için kullanılacak veri modelidir.
     */
    public mvtnRequestListPOST (request: MvtnCreateRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MvtnRequestListResponse> {
        const path = this.basePath('/ctrl/mvtnRequest/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling mvtnRequestListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('mvtnRequestListPOST');
        return <Observable<MvtnRequestListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('mvtnRequestListPOST'); });
    }
    

    /**
     * Sanal ağ talebi oluşturulmasını sağlayan servis.
     * 
     * @param request Yeni sanal ağ talebi oluşturmak veya güncellemek için kullanılan istek veri modelidir.
     */
    public mvtnRequestSavePOST (request: MvtnCreateRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MvtnCreateRequestResponse> {
        const path = this.basePath('/ctrl/mvtnRequest/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling mvtnRequestSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('mvtnRequestSavePOST');
        return <Observable<MvtnCreateRequestResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('mvtnRequestSavePOST'); });
    }
    

    /**
     * Sanal ağ taleplerinin verilen kriterlere göre arama listesini döner.
     * 
     * @param request Sanal ağ talebi için kullanılacak veri modelidir.
     */
    public mvtnRequestSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MvtnRequestListResponse> {
        const path = this.basePath('/ctrl/mvtnRequest/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling mvtnRequestSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('mvtnRequestSearchPOST');
        return <Observable<MvtnRequestListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('mvtnRequestSearchPOST'); });
    }
    

}

