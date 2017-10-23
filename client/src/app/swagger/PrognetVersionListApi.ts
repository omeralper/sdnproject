'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {VersionListRequest} from "./VersionListRequest";
import {GenericResponse} from "./GenericResponse";
import {VersionListResponse} from "./VersionListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class PrognetVersionListApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Prognet kontrolcü versiyon bilgilerini veren servistir..
     * 
     * @param request Hangi kontrolcü için bilgi istendiğini tutar.
     */
    public versionListPOST (request: VersionListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VersionListResponse> {
        const path = this.basePath('/capi/version/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling versionListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('versionListPOST');
        return <Observable<VersionListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('versionListPOST'); });
    }
    

}

