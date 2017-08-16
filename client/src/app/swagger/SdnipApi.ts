'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {SdnipASNumberResponse} from "./SdnipASNumberResponse";
import {SdnipRequest} from "./SdnipRequest";
import {GenericResponse} from "./GenericResponse";
import {SdnipResponse} from "./SdnipResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {SdnipRouterResponse} from "./SdnipRouterResponse";
import {GenericIdRequest} from "./GenericIdRequest";
import {NeighborRelationResponse} from "./NeighborRelationResponse";
import {NeighborRelationSaveRequest} from "./NeighborRelationSaveRequest";
import {NeighborRelationListResponse} from "./NeighborRelationListResponse";
import {GenericSearchRequest} from "./GenericSearchRequest";
import {NeighborRelationStatusListResponse} from "./NeighborRelationStatusListResponse";
import {SdnipRouteSaveRequest} from "./SdnipRouteSaveRequest";
import {SdnipRouteListResponse} from "./SdnipRouteListResponse";
import {SdnipRouterSaveRequest} from "./SdnipRouterSaveRequest";
import {SdnipRouterListResponse} from "./SdnipRouterListResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class SdnipApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * otomon sistem numarasını veren servistir.
     * 
     * @param request Sdnip genel istek veri modelidir.
     */
    public sdnipRouterAsNumberGetPOST (request: SdnipRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipASNumberResponse> {
        const path = this.basePath('/sdnip/router/as/number/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterAsNumberGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterAsNumberGetPOST');
        return <Observable<SdnipASNumberResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterAsNumberGetPOST'); });
    }
    

    /**
     * Rotalayıcı silmek için kullanılan servistir.
     * 
     * @param request Silinmesi istenen rotalayıcı numara bilgisi.
     */
    public sdnipRouterDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipResponse> {
        const path = this.basePath('/sdnip/router/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterDeletePOST');
        return <Observable<SdnipResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterDeletePOST'); });
    }
    

    /**
     * Talep edilen ağ topolojisinin detaylarının alınması için kullanılan fonksiyondur.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public sdnipRouterGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipRouterResponse> {
        const path = this.basePath('/sdnip/router/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterGetPOST');
        return <Observable<SdnipRouterResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterGetPOST'); });
    }
    

    /**
     * BGP sözcüsüne atanmış tüm komşulukları silmek için kullanılan servistir.
     * 
     * @param request Komşulukları kaldırılmak istenen BGP sözcüsü numarası.
     */
    public sdnipRouterNeighborDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipResponse> {
        const path = this.basePath('/sdnip/router/neighbor/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterNeighborDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterNeighborDeletePOST');
        return <Observable<SdnipResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterNeighborDeletePOST'); });
    }
    

    /**
     * Bir BGP sözcüsüne ait eş yönlendiriciler bilgisini veren servistir.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public sdnipRouterNeighborGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NeighborRelationResponse> {
        const path = this.basePath('/sdnip/router/neighbor/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterNeighborGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterNeighborGetPOST');
        return <Observable<NeighborRelationResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterNeighborGetPOST'); });
    }
    

    /**
     * Sdnip rotalayıcıya komşu atamak için kullanılan servistir.
     * 
     * @param request Sdnip rotalayıcıya komşu atamak için kullanılan istek veri modelidir.
     */
    public sdnipRouterNeighborSavePOST (request: NeighborRelationSaveRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipResponse> {
        const path = this.basePath('/sdnip/router/neighbor/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterNeighborSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterNeighborSavePOST');
        return <Observable<SdnipResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterNeighborSavePOST'); });
    }
    

    /**
     * Arama kriterlerine BGP komşuluk bilgilerini döner.
     * 
     * @param request BGP komşuluk arama kriterlerini tutan veri modelidir.
     */
    public sdnipRouterNeighborSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NeighborRelationListResponse> {
        const path = this.basePath('/sdnip/router/neighbor/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterNeighborSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterNeighborSearchPOST');
        return <Observable<NeighborRelationListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterNeighborSearchPOST'); });
    }
    

    /**
     * Bir BGP sözcüsünün komşuları ile olan bağlantı durumunu verir.
     * 
     * @param request Komşuluk bağlantı durumu istenen BGP sözcüsü numarası.
     */
    public sdnipRouterNeighborStatusListPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NeighborRelationStatusListResponse> {
        const path = this.basePath('/sdnip/router/neighbor/status/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterNeighborStatusListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterNeighborStatusListPOST');
        return <Observable<NeighborRelationStatusListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterNeighborStatusListPOST'); });
    }
    

    /**
     * Rota silmek için kullanılan servistir.
     * 
     * @param request Silinmesi istenen rota numara bilgisi.
     */
    public sdnipRouterRouteDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipResponse> {
        const path = this.basePath('/sdnip/router/route/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterRouteDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterRouteDeletePOST');
        return <Observable<SdnipResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterRouteDeletePOST'); });
    }
    

    /**
     * Sdnip rota anons etmeyi sağlayan servis.
     * 
     * @param request Yeni sdnip rota tanımlamak için kullanılan istek veri modelidir.
     */
    public sdnipRouterRouteSavePOST (request: SdnipRouteSaveRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipResponse> {
        const path = this.basePath('/sdnip/router/route/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterRouteSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterRouteSavePOST');
        return <Observable<SdnipResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterRouteSavePOST'); });
    }
    

    /**
     * Bir otomon sistem içindeki ve öğrenilmiş rotaları arama için kullanılan servistir.
     * 
     * @param request Rota arama için kullanılan istek veri modelidir.
     */
    public sdnipRouterRouteSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipRouteListResponse> {
        const path = this.basePath('/sdnip/router/route/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterRouteSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterRouteSearchPOST');
        return <Observable<SdnipRouteListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterRouteSearchPOST'); });
    }
    

    /**
     * Sdnip rotalayıcı oluşturulmasını sağlayan servis.
     * 
     * @param request Yeni sdnip rotalayıcı oluşturmak için kullanılan istek veri modelidir.
     */
    public sdnipRouterSavePOST (request: SdnipRouterSaveRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipResponse> {
        const path = this.basePath('/sdnip/router/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterSavePOST');
        return <Observable<SdnipResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterSavePOST'); });
    }
    

    /**
     * Arama kriterlerine uyan yönlendirici bilgilerini döner.
     * 
     * @param request Yönlendirici arama kriterlerini tutan veri modelidir.
     */
    public sdnipRouterSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<SdnipRouterListResponse> {
        const path = this.basePath('/sdnip/router/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sdnipRouterSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('sdnipRouterSearchPOST');
        return <Observable<SdnipRouterListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('sdnipRouterSearchPOST'); });
    }
    

}

