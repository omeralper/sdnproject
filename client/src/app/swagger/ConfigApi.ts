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
import {ConfigDefinitionResponse} from "./ConfigDefinitionResponse";
import {GenericIdRequest} from "./GenericIdRequest";
import {ConfigDefinitionListResponse} from "./ConfigDefinitionListResponse";
import {GenericListRequest} from "./GenericListRequest";
import {ConfigDefinitionRequest} from "./ConfigDefinitionRequest";
import {ModuleNodeConfigResponse} from "./ModuleNodeConfigResponse";
import {ModuleNodeConfigListRequest} from "./ModuleNodeConfigListRequest";
import {ModuleNodeConfigListResponse} from "./ModuleNodeConfigListResponse";
import {ModuleNodeConfigRequest} from "./ModuleNodeConfigRequest";
import {ModuleNodesListResponse} from "./ModuleNodesListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class ConfigApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * İstenen konfigürasyon tanımının silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public configConfigDefinitionDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ConfigDefinitionResponse> {
        const path = this.basePath('/capi/config/configDefinition/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling configConfigDefinitionDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('configConfigDefinitionDeletePOST');
        return <Observable<ConfigDefinitionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('configConfigDefinitionDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak konfigürasyon tanımı detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public configConfigDefinitionGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ConfigDefinitionResponse> {
        const path = this.basePath('/capi/config/configDefinition/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling configConfigDefinitionGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('configConfigDefinitionGetPOST');
        return <Observable<ConfigDefinitionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('configConfigDefinitionGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm konfigürasyon tanımlarının listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public configConfigDefinitionListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ConfigDefinitionListResponse> {
        const path = this.basePath('/capi/config/configDefinition/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling configConfigDefinitionListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('configConfigDefinitionListPOST');
        return <Observable<ConfigDefinitionListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('configConfigDefinitionListPOST'); });
    }
    

    /**
     * Konfigürasyon tanımı verilerinin saklanmasını sağlayan fonksiyondur.
     * Konfigürasyon tanımı verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID boş olması durumunda Insert işlemi yapılmalıdır.
     * @param request Konfigürasyon tanımı veri transfer modelini taşıyan istek nesnesi.
     */
    public configConfigDefinitionSavePOST (request: ConfigDefinitionRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ConfigDefinitionResponse> {
        const path = this.basePath('/capi/config/configDefinition/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling configConfigDefinitionSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('configConfigDefinitionSavePOST');
        return <Observable<ConfigDefinitionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('configConfigDefinitionSavePOST'); });
    }
    

    /**
     * İstenen trafik sınıfı&#39;ın silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public configModuleNodeConfigDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ModuleNodeConfigResponse> {
        const path = this.basePath('/capi/config/moduleNodeConfig/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling configModuleNodeConfigDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('configModuleNodeConfigDeletePOST');
        return <Observable<ModuleNodeConfigResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('configModuleNodeConfigDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak trafik sınıfı detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public configModuleNodeConfigGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ModuleNodeConfigResponse> {
        const path = this.basePath('/capi/config/moduleNodeConfig/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling configModuleNodeConfigGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('configModuleNodeConfigGetPOST');
        return <Observable<ModuleNodeConfigResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('configModuleNodeConfigGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm trafik sınıfları&#39;ın listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public configModuleNodeConfigListPOST (request: ModuleNodeConfigListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ModuleNodeConfigListResponse> {
        const path = this.basePath('/capi/config/moduleNodeConfig/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling configModuleNodeConfigListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('configModuleNodeConfigListPOST');
        return <Observable<ModuleNodeConfigListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('configModuleNodeConfigListPOST'); });
    }
    

    /**
     * Modül node konfigürasyonları verilerinin saklanmasını sağlayan fonksiyondur.
     * Modül node konfigürasyonları verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID boş olması durumunda Insert işlemi yapılmalıdır.
     * @param request Modül node konfigürasyonları veri transfer modelini taşıyan istek nesnesi.
     */
    public configModuleNodeConfigSavePOST (request: ModuleNodeConfigRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ModuleNodeConfigResponse> {
        const path = this.basePath('/capi/config/moduleNodeConfig/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling configModuleNodeConfigSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('configModuleNodeConfigSavePOST');
        return <Observable<ModuleNodeConfigResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('configModuleNodeConfigSavePOST'); });
    }
    

    /**
     * Sistemdeki tüm modül ve ilgili modüle ait küme elemanları listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public configModuleNodesListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ModuleNodesListResponse> {
        const path = this.basePath('/capi/config/moduleNodes/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling configModuleNodesListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('configModuleNodesListPOST');
        return <Observable<ModuleNodesListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('configModuleNodesListPOST'); });
    }
    

}

