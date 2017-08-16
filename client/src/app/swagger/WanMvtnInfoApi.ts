'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {WanMvtnInfoResponse} from "./WanMvtnInfoResponse";
import {GenericResponse} from "./GenericResponse";
import {WanMvtnInfoRequest} from "./WanMvtnInfoRequest";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericListRequest} from "./GenericListRequest";
import {WanMvtnInfoListResponse} from "./WanMvtnInfoListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class WanMvtnInfoApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Geniş alan sanal ağlarının saklanmasını ve güncellenmesini sağlar.
     * 
     * @param request Geniş alan sanal ağlarının veri transfer modelini taşıyan istek nesnesidir.
     */
    public wanMvtnCreatePOST (request: WanMvtnInfoRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanMvtnInfoResponse> {
        const path = this.basePath('/ctrl/wanMvtn/create');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanMvtnCreatePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanMvtnCreatePOST');
        return <Observable<WanMvtnInfoResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanMvtnCreatePOST'); });
    }
    

    /**
     * Geniş alan sanal ağlarının silinmesini sağlar.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public wanMvtnDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanMvtnInfoResponse> {
        const path = this.basePath('/ctrl/wanMvtn/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanMvtnDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanMvtnDeletePOST');
        return <Observable<WanMvtnInfoResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanMvtnDeletePOST'); });
    }
    

    /**
     * Sistemdeki tüm geniş alan sanal ağlarının listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public wanMvtnListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanMvtnInfoListResponse> {
        const path = this.basePath('/ctrl/wanMvtn/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanMvtnListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanMvtnListPOST');
        return <Observable<WanMvtnInfoListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanMvtnListPOST'); });
    }
    

}

