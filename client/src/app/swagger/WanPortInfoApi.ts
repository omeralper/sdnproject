'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {WanPortInfoResponse} from "./WanPortInfoResponse";
import {GenericResponse} from "./GenericResponse";
import {WanPortInfoDeleteRequest} from "./WanPortInfoDeleteRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {WanPortInfoRequest} from "./WanPortInfoRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";
import {WanPortInfoListResponse} from "./WanPortInfoListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class WanPortInfoApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Geniş alan ağlarının bilgi verilerinin silinmesini sağlar.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public wanConfigurationWanPortInfoDeletePOST (request: WanPortInfoDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanPortInfoResponse> {
        const path = this.basePath('/ctrl/wanConfiguration/wanPortInfo/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanConfigurationWanPortInfoDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanConfigurationWanPortInfoDeletePOST');
        return <Observable<WanPortInfoResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanConfigurationWanPortInfoDeletePOST'); });
    }
    

    /**
     * Geniş alan ağlarının girişlerinin bilgi ayrıntılarını döker.
     * 
     * @param request Geniş alan ağlarının bilgi isteğinin ayrıntılarının bulunduğu veri yapısıdır.
     */
    public wanConfigurationWanPortInfoGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanPortInfoResponse> {
        const path = this.basePath('/ctrl/wanConfiguration/wanPortInfo/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanConfigurationWanPortInfoGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanConfigurationWanPortInfoGetPOST');
        return <Observable<WanPortInfoResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanConfigurationWanPortInfoGetPOST'); });
    }
    

    /**
     * Geniş alan ağlarının bilgi verilerinin saklanmasını ve güncellenmesini sağlar.
     * 
     * @param request Geniş alan ağlarının bilgi veri transfer modelini taşıyan istek nesnesidir.
     */
    public wanConfigurationWanPortInfoSavePOST (request: WanPortInfoRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanPortInfoResponse> {
        const path = this.basePath('/ctrl/wanConfiguration/wanPortInfo/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanConfigurationWanPortInfoSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanConfigurationWanPortInfoSavePOST');
        return <Observable<WanPortInfoResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanConfigurationWanPortInfoSavePOST'); });
    }
    

    /**
     * Sistemdeki tüm geniş alan ağlarının girişlerinin bilgi kapsamlarının listesini döner.
     * 
     * @param request geniş alan ağlarının girişlerinin bilgi kapsamlarını listeleme istek nesnesi.
     */
    public wanConfigurationWanPortInfoSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanPortInfoListResponse> {
        const path = this.basePath('/ctrl/wanConfiguration/wanPortInfo/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanConfigurationWanPortInfoSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanConfigurationWanPortInfoSearchPOST');
        return <Observable<WanPortInfoListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanConfigurationWanPortInfoSearchPOST'); });
    }
    

}

