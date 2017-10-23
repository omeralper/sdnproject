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
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {IpLocationResponse} from "./IpLocationResponse";
import {IpLocationListResponse} from "./IpLocationListResponse";
import {GenericListRequest} from "./GenericListRequest";
import {IpLocationRequest} from "./IpLocationRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class IpLocationApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Lokasyon tabanlı IP bilgilerinin kaydolmasını sağlayan servistir.
     * 
     * @param request Lokasyon tabanlı IP bilgisini tutar
     */
    public ipLocationDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<IpLocationResponse> {
        const path = this.basePath('/ctrl/ipLocation/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling ipLocationDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('ipLocationDeletePOST');
        return <Observable<IpLocationResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('ipLocationDeletePOST'); });
    }
    

    /**
     * Lokasyon tabanlı IP listesinin alınması için kullanılan fonksiyondur
     * IP lokasyon listesinin alınması için sunucuya yapılan servis modelidir.
     * @param request Genel listeleme isteği yapılmasını sağlayan veri modeli.
     */
    public ipLocationListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<IpLocationListResponse> {
        const path = this.basePath('/ctrl/ipLocation/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling ipLocationListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('ipLocationListPOST');
        return <Observable<IpLocationListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('ipLocationListPOST'); });
    }
    

    /**
     * Lokasyon tabanlı IP bilgilerinin kaydolmasını sağlayan servistir.
     * 
     * @param request Lokasyon tabanlı IP bilgisini tutar
     */
    public ipLocationSavePOST (request: IpLocationRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<IpLocationResponse> {
        const path = this.basePath('/ctrl/ipLocation/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling ipLocationSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('ipLocationSavePOST');
        return <Observable<IpLocationResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('ipLocationSavePOST'); });
    }
    

    /**
     * Lokasyon tabanlı IP listesinde arama yapılması için kullanılan fonksiyondur
     * IP lokasyon listesinde arama yapılması için sunucuya yapılan servis modelidir.
     * @param request Genel arama isteği yapılmasını sağlayan veri modeli.
     */
    public ipLocationSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<IpLocationListResponse> {
        const path = this.basePath('/ctrl/ipLocation/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling ipLocationSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('ipLocationSearchPOST');
        return <Observable<IpLocationListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('ipLocationSearchPOST'); });
    }
    

}

