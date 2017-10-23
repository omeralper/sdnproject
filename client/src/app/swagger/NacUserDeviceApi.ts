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
import {NacUserDeviceResponse} from "./NacUserDeviceResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {NacUserDeviceListRequest} from "./NacUserDeviceListRequest";
import {NacUserDeviceListResponse} from "./NacUserDeviceListResponse";
import {NacUserDeviceRequest} from "./NacUserDeviceRequest";
import {NacUserDeviceSearchRequest} from "./NacUserDeviceSearchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class NacUserDeviceApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Son kullanıcı cihaz atama verilerinin silinmesini sağlayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public userDeviceDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacUserDeviceResponse> {
        const path = this.basePath('/nas/user/device/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userDeviceDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userDeviceDeletePOST');
        return <Observable<NacUserDeviceResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userDeviceDeletePOST'); });
    }
    

    /**
     * Son kullanıcıya cihaz atama detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public userDeviceGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacUserDeviceResponse> {
        const path = this.basePath('/nas/user/device/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userDeviceGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userDeviceGetPOST');
        return <Observable<NacUserDeviceResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userDeviceGetPOST'); });
    }
    

    /**
     * Bir son kullanıcıya ait cihazların listesini dönen fonksiyon.
     * 
     * @param request Son kullanıcıta göre cihaz listeleme istek nesnesi.
     */
    public userDeviceListPOST (request: NacUserDeviceListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacUserDeviceListResponse> {
        const path = this.basePath('/nas/user/device/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userDeviceListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userDeviceListPOST');
        return <Observable<NacUserDeviceListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userDeviceListPOST'); });
    }
    

    /**
     * Son kullanıcı cihaz atama verilerinin saklanmasını sağlayan fonksiyondur.
     * Son kullanıcı cihaz atama verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID değeri olmayan veri modelleri veri tabanında oluşturulacaktır. ID değeri olanlar için güncelleme yapılacaktır.
     * @param request Son kullanıcı cihaz atama veri transfer modelini taşıyan istek nesnesi.
     */
    public userDeviceSavePOST (request: NacUserDeviceRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacUserDeviceResponse> {
        const path = this.basePath('/nas/user/device/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userDeviceSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userDeviceSavePOST');
        return <Observable<NacUserDeviceResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userDeviceSavePOST'); });
    }
    

    /**
     * Bir son kullanıcıya ait cihazların arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Son kullanıcıta göre cihaz arama parametrelerinin belirtildiği veri yapısı.
     */
    public userDeviceSearchPOST (request: NacUserDeviceSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacUserDeviceListResponse> {
        const path = this.basePath('/nas/user/device/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userDeviceSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userDeviceSearchPOST');
        return <Observable<NacUserDeviceListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userDeviceSearchPOST'); });
    }
    

}

