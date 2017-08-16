'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {AAAServerResponse} from "./AAAServerResponse";
import {GenericResponse} from "./GenericResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {GenericListRequest} from "./GenericListRequest";
import {AAAServerListResponse} from "./AAAServerListResponse";
import {AAAServerRequest} from "./AAAServerRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class AAAServerApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * AAA sunucu verilerinin silinmesini sağlayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public serverDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AAAServerResponse> {
        const path = this.basePath('/nas/server/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling serverDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('serverDeletePOST');
        return <Observable<AAAServerResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('serverDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak AAA sunucu detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public serverGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AAAServerResponse> {
        const path = this.basePath('/nas/server/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling serverGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('serverGetPOST');
        return <Observable<AAAServerResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('serverGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm AAA sunucularının listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public serverListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AAAServerListResponse> {
        const path = this.basePath('/nas/server/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling serverListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('serverListPOST');
        return <Observable<AAAServerListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('serverListPOST'); });
    }
    

    /**
     * AAA sunucu verilerinin saklanmasını sağlayan fonksiyondur.
     * AAA sunucu verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID değeri olmayan veri modelleri veri tabanında oluşturulacaktır. ID değeri olanlar için güncelleme yapılacaktır.
     * @param request AAA sunucu veri transfer modelini taşıyan istek nesnesi.
     */
    public serverSavePOST (request: AAAServerRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AAAServerResponse> {
        const path = this.basePath('/nas/server/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling serverSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('serverSavePOST');
        return <Observable<AAAServerResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('serverSavePOST'); });
    }
    

    /**
     * Sistemdeki AAA sunucu verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public serverSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AAAServerListResponse> {
        const path = this.basePath('/nas/server/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling serverSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('serverSearchPOST');
        return <Observable<AAAServerListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('serverSearchPOST'); });
    }
    

}

