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
import {CertificateResponse} from "./CertificateResponse";
import {CertificateRequest} from "./CertificateRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class PkiApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Sertifika üretmeyi sağlayan fonksiyon.
     * 
     * @param request Sertifika isteğinin belirtildiği veri yapısı.
     */
    public pkiNodeCertCreatePOST (request: CertificateRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<CertificateResponse> {
        const path = this.basePath('/capi/pki/nodeCert/create');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling pkiNodeCertCreatePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('pkiNodeCertCreatePOST');
        return <Observable<CertificateResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('pkiNodeCertCreatePOST'); });
    }
    

}

