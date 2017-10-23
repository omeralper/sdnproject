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
import {OvsdbAddBridgeResponse} from "./OvsdbAddBridgeResponse";
import {OvsdbAddBridgeRequest} from "./OvsdbAddBridgeRequest";
import {OvsdbControllerRequest} from "./OvsdbControllerRequest";
import {OvsdbControllerResponse} from "./OvsdbControllerResponse";
import {OvsdbControllerInfoRequest} from "./OvsdbControllerInfoRequest";
import {OvsdbBridgeRequest} from "./OvsdbBridgeRequest";
import {OvsdbPortDescriptionResponse} from "./OvsdbPortDescriptionResponse";
import {OvsdbPortNumberResponse} from "./OvsdbPortNumberResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class OVSDBApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Bir ağ anahtarlayıcı üzerinde bir köprü oluşturan fonksiyondur.
     * 
     * @param request Oluşturulacak köptrü tanımlarını tutar.
     */
    public prognetOvsdbAddBridgePOST (request: OvsdbAddBridgeRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<OvsdbAddBridgeResponse> {
        const path = this.basePath('/ctrl/prognet/ovsdb/add-bridge');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling prognetOvsdbAddBridgePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('prognetOvsdbAddBridgePOST');
        return <Observable<OvsdbAddBridgeResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('prognetOvsdbAddBridgePOST'); });
    }
    

    /**
     * Ağ anahtarlayıcılara yeni ağ kontrolcüler ekleyen fonksiyondur.
     * 
     * @param request Hangi ağ anahtarlayıcılara hangi ağ kontrolcülerin ekleneceği bilgisini tutar.
     */
    public prognetOvsdbAddControllersPOST (request: OvsdbControllerRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<OvsdbControllerResponse> {
        const path = this.basePath('/ctrl/prognet/ovsdb/add-controllers');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling prognetOvsdbAddControllersPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('prognetOvsdbAddControllersPOST');
        return <Observable<OvsdbControllerResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('prognetOvsdbAddControllersPOST'); });
    }
    

    /**
     * Ağ anahtarlayıcıların hangi ağ kontrolcüler tarafından kontrol edildiği bilgisini veren fonksiyondur.
     * 
     * @param request Ağ kontrolcü bilgidi alınmak istenen ağ anahtarlayıcıların listesini tutar.
     */
    public prognetOvsdbGetControllersPOST (request: OvsdbControllerInfoRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<OvsdbControllerResponse> {
        const path = this.basePath('/ctrl/prognet/ovsdb/get-controllers');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling prognetOvsdbGetControllersPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('prognetOvsdbGetControllersPOST');
        return <Observable<OvsdbControllerResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('prognetOvsdbGetControllersPOST'); });
    }
    

    /**
     * Ağ anahtarlayıcı üzerindeki port tanımlarını veren fonksiyondur.
     * 
     * @param request Oluşturulacak köptrü tanımlarını tutar.
     */
    public prognetOvsdbGetPortDescriptionPOST (request: OvsdbBridgeRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<OvsdbPortDescriptionResponse> {
        const path = this.basePath('/ctrl/prognet/ovsdb/get-port-description');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling prognetOvsdbGetPortDescriptionPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('prognetOvsdbGetPortDescriptionPOST');
        return <Observable<OvsdbPortDescriptionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('prognetOvsdbGetPortDescriptionPOST'); });
    }
    

    /**
     * Ağ anahtarlayıcı üzerindeki port isimlerini ve numaralarını veren fonksiyondur.
     * 
     * @param request Oluşturulacak köptrü tanımlarını tutar.
     */
    public prognetOvsdbGetPortNumberPOST (request: OvsdbBridgeRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<OvsdbPortNumberResponse> {
        const path = this.basePath('/ctrl/prognet/ovsdb/get-port-number');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling prognetOvsdbGetPortNumberPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('prognetOvsdbGetPortNumberPOST');
        return <Observable<OvsdbPortNumberResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('prognetOvsdbGetPortNumberPOST'); });
    }
    

    /**
     * Ağ anahtarlayıcılardan ağ kontrolcü tanımlarının silinmesini sağlayan fonksiyondur.
     * 
     * @param request Hangi ağ anahtarlayıcılardan hangi ağ kontrolcülerin silineceği bilgisini tutar.
     */
    public prognetOvsdbRemoveControllersPOST (request: OvsdbControllerRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<OvsdbControllerResponse> {
        const path = this.basePath('/ctrl/prognet/ovsdb/remove-controllers');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling prognetOvsdbRemoveControllersPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('prognetOvsdbRemoveControllersPOST');
        return <Observable<OvsdbControllerResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('prognetOvsdbRemoveControllersPOST'); });
    }
    

    /**
     * Ağ anahtarlayıcılara yeni ağ kontrolcüler atayan fonksiyondur.
     * 
     * @param request Hangi ağ anahtarlayıcılara hangi ağ kontrolcülerin atanacağını tutar.
     */
    public prognetOvsdbSetControllersPOST (request: OvsdbControllerRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<OvsdbControllerResponse> {
        const path = this.basePath('/ctrl/prognet/ovsdb/set-controllers');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling prognetOvsdbSetControllersPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('prognetOvsdbSetControllersPOST');
        return <Observable<OvsdbControllerResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('prognetOvsdbSetControllersPOST'); });
    }
    

}

