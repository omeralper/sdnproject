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
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericListRequest} from "./GenericListRequest";
import {WanMvtnInfoListResponse} from "./WanMvtnInfoListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class WanMvtnInfoDTOApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.0', path].join('');
    }


    /**
     * Geniş alan sanal ağlarının silinmesini sağlar.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public wanmvtnDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanMvtnInfoResponse> {
        const path = this.basePath('/ctrl/wanmvtn/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanmvtnDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanmvtnDeletePOST');
        return <Observable<WanMvtnInfoResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanmvtnDeletePOST'); });
    }
    

    /**
     * Sistemdeki tüm geniş alan sanal ağlarının listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public wanmvtnListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<WanMvtnInfoListResponse> {
        const path = this.basePath('/ctrl/wanmvtn/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling wanmvtnListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('wanmvtnListPOST');
        return <Observable<WanMvtnInfoListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('wanmvtnListPOST'); });
    }
    

}

