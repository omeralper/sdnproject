'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {FeatureListRequest} from "./FeatureListRequest";
import {GenericResponse} from "./GenericResponse";
import {FeatureListResponse} from "./FeatureListResponse";
import {FeatureRequest} from "./FeatureRequest";
import {FeatureResponse} from "./FeatureResponse";
import {GenericSearchRequest} from "./GenericSearchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class FeatureApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Birden fazla küme özelliklerinin durumlarının güncellenmesini sağlar.
     * 
     * @param request Birden fazla küme özelliklerinin durum güncelleme işlemi için kullanılan istek nesnesidir.
     */
    public featureBatchSavePOST (request: FeatureListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<FeatureListResponse> {
        const path = this.basePath('/ctrl/feature/batch/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling featureBatchSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('featureBatchSavePOST');
        return <Observable<FeatureListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('featureBatchSavePOST'); });
    }
    

    /**
     * Küme özelliklerinin düğümlerinin güncellenmesini sağlar.
     * 
     * @param request Küme özelliklerinin durum güncelleme işlemi için kullanılan istek nesnesidir.
     */
    public featureSavePOST (request: FeatureRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<FeatureResponse> {
        const path = this.basePath('/ctrl/feature/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling featureSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('featureSavePOST');
        return <Observable<FeatureResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('featureSavePOST'); });
    }
    

    /**
     * Sistemdeki tüm özellik kapsamlarının listesini döner.
     * 
     * @param request Özellik kapsamlarını listeleme istek nesnesi.
     */
    public featureSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<FeatureListResponse> {
        const path = this.basePath('/ctrl/feature/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling featureSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('featureSearchPOST');
        return <Observable<FeatureListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('featureSearchPOST'); });
    }
    

}

