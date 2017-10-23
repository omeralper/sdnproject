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
import {FlowDeleteRequest} from "./FlowDeleteRequest";
import {FlowResponse} from "./FlowResponse";
import {FlowListRequest} from "./FlowListRequest";
import {FlowListResponse} from "./FlowListResponse";
import {FlowSearchRequest} from "./FlowSearchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class FlowsApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Bir anahtarlayıcı üzerindeki proaktif akışların silinmesi için kullanılan fonksiyon.
     * 
     * @param request ID değeri ile belirtilen anahtarlayıcı ve akış için silme parametrelerinin belirtildiği veri yapısı
     */
    public flowDeletePOST (request: FlowDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<FlowResponse> {
        const path = this.basePath('/ctrl/flow/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling flowDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('flowDeletePOST');
        return <Observable<FlowResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('flowDeletePOST'); });
    }
    

    /**
     * Bir anahtarlayıcı üzerindeki tüm akışların listesini dönen fonksiyon.
     * 
     * @param request ID değeri ile belirtilen anahtarlayıcı için listeleme parametreleri.
     */
    public flowListPOST (request: FlowListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<FlowListResponse> {
        const path = this.basePath('/ctrl/flow/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling flowListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('flowListPOST');
        return <Observable<FlowListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('flowListPOST'); });
    }
    

    /**
     * Bir anahtarlayıcı üzerindeki akışlar içinde arama yapmak için kullanılan fonksiyon.
     * 
     * @param request ID değeri ile belirtilen anahtarlayıcı için arama parametrelerinin belirtildiği veri yapısı.
     */
    public flowSearchPOST (request: FlowSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<FlowListResponse> {
        const path = this.basePath('/ctrl/flow/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling flowSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('flowSearchPOST');
        return <Observable<FlowListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('flowSearchPOST'); });
    }
    

}

