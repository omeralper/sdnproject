'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {VnfdListResponse} from "./VnfdListResponse";
import {GenericResponse} from "./GenericResponse";
import {GenericListRequest} from "./GenericListRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class VnfdApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Vnf tanımlarının listelenmesini sağlayan fonksiyondur.
     * Vnf tanımlarının listelenmesini sağlayan fonksiyondur.
     * @param request Genel liste talebi için kullanılacak veri modelidir.
     */
    public sfcVnfdListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VnfdListResponse> {
        const path = this.basePath('/sfc/vnfd/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sfcVnfdListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sfcVnfdListPOST');
        return <Observable<VnfdListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sfcVnfdListPOST'); });
    }
    

}

