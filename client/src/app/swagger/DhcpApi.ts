'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {DhcpIPOwnerListResponse} from "./DhcpIPOwnerListResponse";
import {GenericResponse} from "./GenericResponse";
import {GenericSearchRequest} from "./GenericSearchRequest";
import {DhcpIpExcludedResponse} from "./DhcpIpExcludedResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {DhcpIpExcludedRequest} from "./DhcpIpExcludedRequest";
import {DhcpIpExcludedListResponse} from "./DhcpIpExcludedListResponse";
import {DhcpIpPoolListResponse} from "./DhcpIpPoolListResponse";
import {DhcpIpRangeResponse} from "./DhcpIpRangeResponse";
import {DhcpIpRangeRequest} from "./DhcpIpRangeRequest";
import {DhcpIpRangeListResponse} from "./DhcpIpRangeListResponse";
import {DhcpIpReservedResponse} from "./DhcpIpReservedResponse";
import {DhcpIpReservedRequest} from "./DhcpIpReservedRequest";
import {DhcpIpReservedListResponse} from "./DhcpIpReservedListResponse";
import {DhcpIpReservedUserResponse} from "./DhcpIpReservedUserResponse";
import {DhcpIpReservedUserRequest} from "./DhcpIpReservedUserRequest";
import {DhcpIpReservedUserListResponse} from "./DhcpIpReservedUserListResponse";
import {DhcpOptionResponse} from "./DhcpOptionResponse";
import {DhcpOptionRequest} from "./DhcpOptionRequest";
import {DhcpOptionListResponse} from "./DhcpOptionListResponse";
import {DhcpOptionKeyListResponse} from "./DhcpOptionKeyListResponse";
import {GenericListRequest} from "./GenericListRequest";
import {DhcpScopeResponse} from "./DhcpScopeResponse";
import {GenericIdRequest} from "./GenericIdRequest";
import {DhcpScopeListResponse} from "./DhcpScopeListResponse";
import {DhcpScopeRequest} from "./DhcpScopeRequest";
import {DhcpIpPoolRequest} from "./DhcpIpPoolRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class DhcpApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * IP sahiplieri (DhcpIpOwner) verileri arasında arama yapmaya yarar.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısıdır.
     */
    public dhcpWebIpownerSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIPOwnerListResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/IPOwner/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpownerSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpownerSearchPOST');
        return <Observable<DhcpIPOwnerListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpownerSearchPOST'); });
    }
    

    /**
     * Kimlik (id) numarası belirtilen yasaklanmış ip&#39;yi (ipExcluded) siler.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısıdır.
     */
    public dhcpWebIpExcludedDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpExcludedResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipExcluded/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpExcludedDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpExcludedDeletePOST');
        return <Observable<DhcpIpExcludedResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpExcludedDeletePOST'); });
    }
    

    /**
     * Yasaklanmış ip (ipExcluded) verilerinin saklanmasını ve güncellenmesini sağlar.
     * 
     * @param request Yasaklanmış ip (ipExcluded) veri transfer modelini taşıyan istek nesnesidir.
     */
    public dhcpWebIpExcludedSavePOST (request: DhcpIpExcludedRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpExcludedResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipExcluded/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpExcludedSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpExcludedSavePOST');
        return <Observable<DhcpIpExcludedResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpExcludedSavePOST'); });
    }
    

    /**
     * Yasaklanmış ip (ipExcluded) verileri arasında arama yapmaya yarar.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısıdır.
     */
    public dhcpWebIpExcludedSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpExcludedListResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipExcluded/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpExcludedSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpExcludedSearchPOST');
        return <Observable<DhcpIpExcludedListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpExcludedSearchPOST'); });
    }
    

    /**
     * Dhcpde oluşturulabilecek ip aralıklarının listesini döner.
     * 
     * @param request dhcpde oluşturulabilecek ip aralıklarının listeleme istek nesnesi.
     */
    public dhcpWebIpPoolSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpPoolListResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipPool/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpPoolSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpPoolSearchPOST');
        return <Observable<DhcpIpPoolListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpPoolSearchPOST'); });
    }
    

    /**
     * Kimlik (id) numarası belirtilen dhcp ip menzilini siler.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısıdır.
     */
    public dhcpWebIpRangeDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpRangeResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipRange/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpRangeDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpRangeDeletePOST');
        return <Observable<DhcpIpRangeResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpRangeDeletePOST'); });
    }
    

    /**
     * dhcp ip menzili verilerinin saklanmasını ve güncellenmesini sağlar.
     * 
     * @param request DhcpIpRange veri transfer modelini taşıyan istek nesnesidir.
     */
    public dhcpWebIpRangeSavePOST (request: DhcpIpRangeRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpRangeResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipRange/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpRangeSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpRangeSavePOST');
        return <Observable<DhcpIpRangeResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpRangeSavePOST'); });
    }
    

    /**
     * dhcp menzili verileri arasında arama yapmaya yarar.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısıdır.
     */
    public dhcpWebIpRangeSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpRangeListResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipRange/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpRangeSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpRangeSearchPOST');
        return <Observable<DhcpIpRangeListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpRangeSearchPOST'); });
    }
    

    /**
     * Kimlik (id) numarası belirtilen ayrılmış ip&#39;i (ipReserved&#39;i) siler.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısıdır.
     */
    public dhcpWebIpReservedDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpReservedResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipReserved/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpReservedDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpReservedDeletePOST');
        return <Observable<DhcpIpReservedResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpReservedDeletePOST'); });
    }
    

    /**
     * Ayrılmış ip (ipReserved) verilerinin saklanmasını ve güncellenmesini sağlar.
     * 
     * @param request Ayrılmış ip (ipReserved) veri transfer modelini taşıyan istek nesnesidir.
     */
    public dhcpWebIpReservedSavePOST (request: DhcpIpReservedRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpReservedResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipReserved/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpReservedSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpReservedSavePOST');
        return <Observable<DhcpIpReservedResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpReservedSavePOST'); });
    }
    

    /**
     * Ayrılmış ip (ipReserved) verileri arasında arama yapmaya yarar.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısıdır.
     */
    public dhcpWebIpReservedSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpReservedListResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipReserved/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpReservedSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpReservedSearchPOST');
        return <Observable<DhcpIpReservedListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpReservedSearchPOST'); });
    }
    

    /**
     * Kimlik (id) numarası belirtilen ayrılmış ip&#39;i (ipReserved&#39;i) siler.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısıdır.
     */
    public dhcpWebIpReservedUserDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpReservedUserResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipReservedUser/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpReservedUserDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpReservedUserDeletePOST');
        return <Observable<DhcpIpReservedUserResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpReservedUserDeletePOST'); });
    }
    

    /**
     * Ayrılmış ip (ipReserved) verilerinin saklanmasını ve güncellenmesini sağlar.
     * 
     * @param request Ayrılmış ip (ipReserved) veri transfer modelini taşıyan istek nesnesidir.
     */
    public dhcpWebIpReservedUserSavePOST (request: DhcpIpReservedUserRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpReservedUserResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipReservedUser/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpReservedUserSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpReservedUserSavePOST');
        return <Observable<DhcpIpReservedUserResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpReservedUserSavePOST'); });
    }
    

    /**
     * Ayrılmış ip (ipReserved) verileri arasında arama yapmaya yarar.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısıdır.
     */
    public dhcpWebIpReservedUserSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpReservedUserListResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/ipReservedUser/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebIpReservedUserSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebIpReservedUserSearchPOST');
        return <Observable<DhcpIpReservedUserListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebIpReservedUserSearchPOST'); });
    }
    

    /**
     * Kimlik (id) numarası belirtilen dhcpOption&#39;i siler.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısıdır.
     */
    public dhcpWebOptionDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpOptionResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/option/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebOptionDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebOptionDeletePOST');
        return <Observable<DhcpOptionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebOptionDeletePOST'); });
    }
    

    /**
     * DhcpOption verilerinin saklanmasını sağlar.
     * 
     * @param request DhcpOption veri transfer modelini taşıyan istek nesnesidir.
     */
    public dhcpWebOptionSavePOST (request: DhcpOptionRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpOptionResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/option/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebOptionSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebOptionSavePOST');
        return <Observable<DhcpOptionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebOptionSavePOST'); });
    }
    

    /**
     * DhcpOption verileri arasında arama yapmaya yarar.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısıdır.
     */
    public dhcpWebOptionSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpOptionListResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/option/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebOptionSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebOptionSearchPOST');
        return <Observable<DhcpOptionListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebOptionSearchPOST'); });
    }
    

    /**
     * Sistemdeki tüm DhcpOptionKey&#39;lerin listesini döner.
     * 
     * @param request DhcpOptionKey listeleme istek nesnesi.
     */
    public dhcpWebOptionKeyListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpOptionKeyListResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/optionKey/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebOptionKeyListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebOptionKeyListPOST');
        return <Observable<DhcpOptionKeyListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebOptionKeyListPOST'); });
    }
    

    /**
     * Kimlik (id) numarası belirtilen dhcp kapsamını siler.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısıdır.
     */
    public dhcpWebScopeDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpScopeResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/scope/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebScopeDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebScopeDeletePOST');
        return <Observable<DhcpScopeResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebScopeDeletePOST'); });
    }
    

    /**
     * Kimlik (id) numarası verilen dhcp kapsamının ayrıntılarını döker.
     * 
     * @param request dhcpScopeGet isteğinin ayrıntılarının bulunduğu veri yapısıdır.
     */
    public dhcpWebScopeGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpScopeResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/scope/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebScopeGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebScopeGetPOST');
        return <Observable<DhcpScopeResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebScopeGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm dhcp kapsamlarının listesini döner.
     * 
     * @param request dhcp kapsamlarını listeleme istek nesnesi.
     */
    public dhcpWebScopeListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpScopeListResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/scope/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebScopeListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebScopeListPOST');
        return <Observable<DhcpScopeListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebScopeListPOST'); });
    }
    

    /**
     * dhcp kapsam verilerinin saklanmasını ve güncellenmesini sağlar.
     * 
     * @param request dhcp kapsam veri transfer modelini taşıyan istek nesnesidir.
     */
    public dhcpWebScopeSavePOST (request: DhcpScopeRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpScopeResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/scope/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebScopeSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebScopeSavePOST');
        return <Observable<DhcpScopeResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebScopeSavePOST'); });
    }
    

    /**
     * dhcp kapsam verileri arasında arama yapmaya yarar.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısıdır.
     */
    public dhcpWebScopeSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpScopeListResponse> {
        const path = this.basePath('/dhcp/dhcpWeb/scope/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpWebScopeSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpWebScopeSearchPOST');
        return <Observable<DhcpScopeListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpWebScopeSearchPOST'); });
    }
    

    /**
     * dhcp ip pool verilerinin saklanmasını ve güncellenmesini sağlar.
     * 
     * @param request dhcp ip pool veri transfer modelini taşıyan istek nesnesidir.
     */
    public dhcpcentralwanDhcpCentalWanWebIpPoolSavePOST (request: DhcpIpPoolRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpScopeResponse> {
        const path = this.basePath('/dhcpcentralwan/dhcpCentalWanWeb/ipPool/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpcentralwanDhcpCentalWanWebIpPoolSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpcentralwanDhcpCentalWanWebIpPoolSavePOST');
        return <Observable<DhcpScopeResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpcentralwanDhcpCentalWanWebIpPoolSavePOST'); });
    }
    

    /**
     * Dhcpde oluşturulabilecek ip aralıklarının listesini döner.
     * 
     * @param request dhcpde oluşturulabilecek ip aralıklarının listeleme istek nesnesi.
     */
    public dhcpcentralwanDhcpCentalWanWebIpPoolSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DhcpIpPoolListResponse> {
        const path = this.basePath('/dhcpcentralwan/dhcpCentalWanWeb/ipPool/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling dhcpcentralwanDhcpCentalWanWebIpPoolSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('dhcpcentralwanDhcpCentalWanWebIpPoolSearchPOST');
        return <Observable<DhcpIpPoolListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('dhcpcentralwanDhcpCentalWanWebIpPoolSearchPOST'); });
    }
    

}

