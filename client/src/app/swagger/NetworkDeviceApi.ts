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
import {NetworkDeviceResponse} from "./NetworkDeviceResponse";
import {NetworkDeviceDeleteRequest} from "./NetworkDeviceDeleteRequest";
import {NetworkDeviceRequest} from "./NetworkDeviceRequest";
import {NetworkDeviceListRequest} from "./NetworkDeviceListRequest";
import {NetworkDeviceListResponse} from "./NetworkDeviceListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class NetworkDeviceApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Belirtilen networkDevice&#39;i siler.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public networkDeviceDeletePOST (request: NetworkDeviceDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetworkDeviceResponse> {
        const path = this.basePath('/ctrl/networkDevice/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling networkDeviceDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('networkDeviceDeletePOST');
        return <Observable<NetworkDeviceResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('networkDeviceDeletePOST'); });
    }
    

    /**
     * NetworkDevice&#39;in detaylarını döker.
     * 
     * @param request NetworkDevice isteğinin detaylarının bulunduğu veri yapısı.
     */
    public networkDeviceGetPOST (request: NetworkDeviceRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetworkDeviceResponse> {
        const path = this.basePath('/ctrl/networkDevice/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling networkDeviceGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('networkDeviceGetPOST');
        return <Observable<NetworkDeviceResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('networkDeviceGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm networkDevice&#39;ların listesini döner.
     * 
     * @param request NetworkDevice listeleme istek nesnesi.
     */
    public networkDeviceListPOST (request: NetworkDeviceListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetworkDeviceListResponse> {
        const path = this.basePath('/ctrl/networkDevice/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling networkDeviceListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('networkDeviceListPOST');
        return <Observable<NetworkDeviceListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('networkDeviceListPOST'); });
    }
    

    /**
     * NetworkDevice verilerinin saklanmasını sağlar.
     * NetworkDevice verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: Insert işlemine izin verilmemelidir.
     * @param request NetworkDevice veri transfer modelini taşıyan istek nesnesi.
     */
    public networkDeviceSavePOST (request: NetworkDeviceRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetworkDeviceResponse> {
        const path = this.basePath('/ctrl/networkDevice/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling networkDeviceSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('networkDeviceSavePOST');
        return <Observable<NetworkDeviceResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('networkDeviceSavePOST'); });
    }
    

}

