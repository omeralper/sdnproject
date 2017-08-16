'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {ControllerListResponse} from "./ControllerListResponse";
import {GenericResponse} from "./GenericResponse";
import {GenericListRequest} from "./GenericListRequest";
import {TopologyResponse} from "./TopologyResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericRequest} from "./GenericRequest";
import {TopologyRequest} from "./TopologyRequest";
import {LinkResponse} from "./LinkResponse";
import {LinkRequest} from "./LinkRequest";
import {LinkListResponse} from "./LinkListResponse";
import {GenericSearchRequest} from "./GenericSearchRequest";
import {TopologyListRequest} from "./TopologyListRequest";
import {TopologyListResponse} from "./TopologyListResponse";
import {IndicatorsResponse} from "./IndicatorsResponse";
import {SwitchResponse} from "./SwitchResponse";
import {GenericIdRequest} from "./GenericIdRequest";
import {SwitchListResponse} from "./SwitchListResponse";
import {SwitchRequest} from "./SwitchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class TopologyApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Sistemdeki tüm kontrolcülerin listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public topologyControllerListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ControllerListResponse> {
        const path = this.basePath('/ctrl/topology/controller/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologyControllerListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologyControllerListPOST');
        return <Observable<ControllerListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologyControllerListPOST'); });
    }
    

    /**
     * Istenen topolojinin silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public topologyDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<TopologyResponse> {
        const path = this.basePath('/ctrl/topology/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologyDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologyDeletePOST');
        return <Observable<TopologyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologyDeletePOST'); });
    }
    

    /**
     * Topoloji keşfinin başlatılmasını sağlar.
     * Topoloji keşfinin başlatılmasını sağlar.
     * @param request boolean.
     */
    public topologyEnableDiscoveryPOST (request: GenericRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<GenericResponse> {
        const path = this.basePath('/ctrl/topology/enableDiscovery');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologyEnableDiscoveryPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologyEnableDiscoveryPOST');
        return <Observable<GenericResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologyEnableDiscoveryPOST'); });
    }
    

    /**
     * Ağ topolojisinin detaylarının alınması için kullanılan fonksiyondur.
     * 
     * @param request Topoloji isteğinin detaylarının bulunduğu veri yapısı.
     */
    public topologyGetPOST (request: TopologyRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<TopologyResponse> {
        const path = this.basePath('/ctrl/topology/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologyGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologyGetPOST');
        return <Observable<TopologyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologyGetPOST'); });
    }
    

    /**
     * Topolojiden istenen bağlantının silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public topologyLinkDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<LinkResponse> {
        const path = this.basePath('/ctrl/topology/link/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologyLinkDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologyLinkDeletePOST');
        return <Observable<LinkResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologyLinkDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak Bağlantı detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public topologyLinkGetPOST (request: LinkRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<LinkResponse> {
        const path = this.basePath('/ctrl/topology/link/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologyLinkGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologyLinkGetPOST');
        return <Observable<LinkResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologyLinkGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm bağlantıların listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public topologyLinkListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<LinkListResponse> {
        const path = this.basePath('/ctrl/topology/link/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologyLinkListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologyLinkListPOST');
        return <Observable<LinkListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologyLinkListPOST'); });
    }
    

    /**
     * Bağlantı verilerinin saklanmasını sağlayan fonksiyondur.
     * Bağlantı verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: Insert işlemine izin verilmemelidir.
     * @param request Bağlantı veri transfer modelini taşıyan istek nesnesi.
     */
    public topologyLinkSavePOST (request: LinkRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<LinkResponse> {
        const path = this.basePath('/ctrl/topology/link/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologyLinkSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologyLinkSavePOST');
        return <Observable<LinkResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologyLinkSavePOST'); });
    }
    

    /**
     * Sistemdeki bağlantı verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public topologyLinkSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<LinkListResponse> {
        const path = this.basePath('/ctrl/topology/link/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologyLinkSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologyLinkSearchPOST');
        return <Observable<LinkListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologyLinkSearchPOST'); });
    }
    

    /**
     * Sistemdeki tüm topolojilerin listesini dönen fonksiyon.
     * 
     * @param request Topoloji listeleme istek nesnesi.
     */
    public topologyListPOST (request: TopologyListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<TopologyListResponse> {
        const path = this.basePath('/ctrl/topology/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologyListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologyListPOST');
        return <Observable<TopologyListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologyListPOST'); });
    }
    

    /**
     * Gösterge sayılarını ve ilgili verilerin listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public topologyLiteControllerListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<IndicatorsResponse> {
        const path = this.basePath('/ctrl/topology/lite-controller/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologyLiteControllerListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologyLiteControllerListPOST');
        return <Observable<IndicatorsResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologyLiteControllerListPOST'); });
    }
    

    /**
     * Topolojiden istenen anahtarlayıcının silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public topologySwitchDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SwitchResponse> {
        const path = this.basePath('/ctrl/topology/switch/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologySwitchDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologySwitchDeletePOST');
        return <Observable<SwitchResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologySwitchDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak Anahtarlayıcı detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public topologySwitchGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SwitchResponse> {
        const path = this.basePath('/ctrl/topology/switch/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologySwitchGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologySwitchGetPOST');
        return <Observable<SwitchResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologySwitchGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm anahtarlayıcıların listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public topologySwitchListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SwitchListResponse> {
        const path = this.basePath('/ctrl/topology/switch/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologySwitchListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologySwitchListPOST');
        return <Observable<SwitchListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologySwitchListPOST'); });
    }
    

    /**
     * Anahtarlayıcı verilerinin saklanmasını sağlayan fonksiyondur.
     * Anahtarlayıcı verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: Insert işlemine izin verilmemelidir.
     * @param request Anahtarlayıcı veri transfer modelini taşıyan istek nesnesi.
     */
    public topologySwitchSavePOST (request: SwitchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SwitchResponse> {
        const path = this.basePath('/ctrl/topology/switch/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologySwitchSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologySwitchSavePOST');
        return <Observable<SwitchResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologySwitchSavePOST'); });
    }
    

    /**
     * Sistemdeki anahtarlayıcı verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public topologySwitchSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SwitchListResponse> {
        const path = this.basePath('/ctrl/topology/switch/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling topologySwitchSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('topologySwitchSearchPOST');
        return <Observable<SwitchListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('topologySwitchSearchPOST'); });
    }
    

}

