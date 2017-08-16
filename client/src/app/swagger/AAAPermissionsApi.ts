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
import {PermResponse} from "./PermResponse";
import {GenericIdRequest} from "./GenericIdRequest";
import {PermListResponse} from "./PermListResponse";
import {GenericListRequest} from "./GenericListRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class AAAPermissionsApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * ID değeri kullanılarak yetki detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public aaaPermGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PermResponse> {
        const path = this.basePath('/capi/aaa/perm/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaPermGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaPermGetPOST');
        return <Observable<PermResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaPermGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm yetkilerin listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public aaaPermListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PermListResponse> {
        const path = this.basePath('/capi/aaa/perm/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaPermListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaPermListPOST');
        return <Observable<PermListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaPermListPOST'); });
    }
    

    /**
     * Sistemdeki yetki verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public aaaPermSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PermListResponse> {
        const path = this.basePath('/capi/aaa/perm/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaPermSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaPermSearchPOST');
        return <Observable<PermListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaPermSearchPOST'); });
    }
    

}

