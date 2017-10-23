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
import {MeterListRequest} from "./MeterListRequest";
import {MeterListResponse} from "./MeterListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class MeterApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Sanal ağdaki ya da fiziksel ağdaki meterları listeleyen servis.
     * 
     * @param request Sanal ağdaki  ya da fiziksel ağdaki meterları listelemek için kullanılan istek veri modelidir.
     */
    public meterListPOST (request: MeterListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MeterListResponse> {
        const path = this.basePath('/ctrl/meter/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling meterListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('meterListPOST');
        return <Observable<MeterListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('meterListPOST'); });
    }
    

}

