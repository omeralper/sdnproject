'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {EdrSearchRequest} from "./EdrSearchRequest";
import {GenericResponse} from "./GenericResponse";
import {EdrListResponse} from "./EdrListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class EdrListAndSearchApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Sistemdeki EDR kayırları arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public edrWebSearchPOST (request: EdrSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<EdrListResponse> {
        const path = this.basePath('/edr/edrWeb/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling edrWebSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('edrWebSearchPOST');
        return <Observable<EdrListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('edrWebSearchPOST'); });
    }
    

}

