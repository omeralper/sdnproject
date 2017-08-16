'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {MvtnChangeStatusResponse} from "./MvtnChangeStatusResponse";
import {GenericResponse} from "./GenericResponse";
import {MvtnChangeStatusRequest} from "./MvtnChangeStatusRequest";
import {MvtnChangeTypeRequest} from "./MvtnChangeTypeRequest";
import {MvtnChangeTypeResponse} from "./MvtnChangeTypeResponse";
import {TopologyResponse} from "./TopologyResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {TopologyRequest} from "./TopologyRequest";
import {MvtnParametersResponse} from "./MvtnParametersResponse";
import {GenericIdRequest} from "./GenericIdRequest";
import {LinkRequest} from "./LinkRequest";
import {LinkResponse} from "./LinkResponse";
import {GenericListRequest} from "./GenericListRequest";
import {MvtnListResponse} from "./MvtnListResponse";
import {SwitchResponse} from "./SwitchResponse";
import {SwitchRequest} from "./SwitchRequest";
import {DeviceProfileListResponse} from "./DeviceProfileListResponse";
import {DeviceProfileListRequest} from "./DeviceProfileListRequest";
import {MvtnRequest} from "./MvtnRequest";
import {MvtnCreateResponse} from "./MvtnCreateResponse";
import {GenericSearchRequest} from "./GenericSearchRequest";
import {UniquenessControlResponse} from "./UniquenessControlResponse";
import {UniquenessControlRequest} from "./UniquenessControlRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class MvtnApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * İstenen sanal ağın durumunu değiştirir.
     * 
     * @param request Sanal ağların durumlarını değiştirmek için kullanılacak veri modelidir.
     */
    public virtualChangeStatusPOST (request: MvtnChangeStatusRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MvtnChangeStatusResponse> {
        const path = this.basePath('/ctrl/virtual/changeStatus');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualChangeStatusPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualChangeStatusPOST');
        return <Observable<MvtnChangeStatusResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualChangeStatusPOST'); });
    }
    

    /**
     * İstenen sanal ağın tipini değiştirir.
     * 
     * @param request Sanal ağların tiplerini değiştirmek için kullanılacak veri modelidir.
     */
    public virtualChangeTypePOST (request: MvtnChangeTypeRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MvtnChangeTypeResponse> {
        const path = this.basePath('/ctrl/virtual/changeType');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualChangeTypePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualChangeTypePOST');
        return <Observable<MvtnChangeTypeResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualChangeTypePOST'); });
    }
    

    /**
     * Istenen topolojinin silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public virtualDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<TopologyResponse> {
        const path = this.basePath('/ctrl/virtual/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualDeletePOST');
        return <Observable<TopologyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualDeletePOST'); });
    }
    

    /**
     * Ağ topolojisinin detaylarının alınması için kullanılan fonksiyondur.
     * 
     * @param request Topoloji isteğinin detaylarının bulunduğu veri yapısı.
     */
    public virtualGetPOST (request: TopologyRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<TopologyResponse> {
        const path = this.basePath('/ctrl/virtual/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualGetPOST');
        return <Observable<TopologyResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualGetPOST'); });
    }
    

    /**
     * Sanal ağın varsayılan parametrelerini döner
     * 
     * @param request Sanal ağ varsayılan parametrelerinin veri modelidir.
     */
    public virtualGetParametersPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MvtnParametersResponse> {
        const path = this.basePath('/ctrl/virtual/get/parameters');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualGetParametersPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualGetParametersPOST');
        return <Observable<MvtnParametersResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualGetParametersPOST'); });
    }
    

    /**
     * Sanal ağ linki için güncellemeleri kaydeder
     * 
     * @param request Sanal ağ linkini kaydeden veri modelidir.
     */
    public virtualLinkSavePOST (request: LinkRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<LinkResponse> {
        const path = this.basePath('/ctrl/virtual/link/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualLinkSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualLinkSavePOST');
        return <Observable<LinkResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualLinkSavePOST'); });
    }
    

    /**
     * Sanal ağ taleplerinin verilen kriterlere göre listesini döner.
     * 
     * @param request Sanal ağ talebi için kullanılacak veri modelidir.
     */
    public virtualListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MvtnListResponse> {
        const path = this.basePath('/ctrl/virtual/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualListPOST');
        return <Observable<MvtnListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualListPOST'); });
    }
    

    /**
     * Device üzerindeki herhangi bir sanal ağa atanmamış portları döner.
     * 
     * @param request Device üzerindeki müsait portları listelemek için kullanılacak istek veri modelidir.
     */
    public virtualListAvailableDevicePortsPOST (request: SwitchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SwitchResponse> {
        const path = this.basePath('/ctrl/virtual/list-available-device-ports');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualListAvailableDevicePortsPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualListAvailableDevicePortsPOST');
        return <Observable<SwitchResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualListAvailableDevicePortsPOST'); });
    }
    

    /**
     * Topolojideki deviceların profillerini listeleyen servis.
     * 
     * @param request Device profillerini listelemek için kullanılacak istek veri modelidir.
     */
    public virtualListDeviceProfilesPOST (request: DeviceProfileListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<DeviceProfileListResponse> {
        const path = this.basePath('/ctrl/virtual/list-device-profiles');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualListDeviceProfilesPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualListDeviceProfilesPOST');
        return <Observable<DeviceProfileListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualListDeviceProfilesPOST'); });
    }
    

    /**
     * Sanal ağ oluşturulmasını sağlayan servis.
     * 
     * @param request Yeni sanal ağ oluşturmak için kullanılan istek veri modelidir.
     */
    public virtualSavePOST (request: MvtnRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MvtnCreateResponse> {
        const path = this.basePath('/ctrl/virtual/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualSavePOST');
        return <Observable<MvtnCreateResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualSavePOST'); });
    }
    

    /**
     * Sanal ağ taleplerinin verilen kriterlere göre arama listesini döner.
     * 
     * @param request Sanal ağ talebi için kullanılacak veri modelidir.
     */
    public virtualSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<MvtnListResponse> {
        const path = this.basePath('/ctrl/virtual/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualSearchPOST');
        return <Observable<MvtnListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualSearchPOST'); });
    }
    

    /**
     * Sanal ağ oluştururken girilen alanların benzersizlik kontrolleri için kullanılır.
     * 
     * @param request Varolan sanal ağlarda aranacak değer ve parametrenin veri modelidir.
     */
    public virtualValidatePOST (request: UniquenessControlRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<UniquenessControlResponse> {
        const path = this.basePath('/ctrl/virtual/validate');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling virtualValidatePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('virtualValidatePOST');
        return <Observable<UniquenessControlResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('virtualValidatePOST'); });
    }
    

}

