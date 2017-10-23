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
import {PathResponse} from "./PathResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {PathRequest} from "./PathRequest";
import {PathListResponse} from "./PathListResponse";
import {PathListRequest} from "./PathListRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class PathsApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Istenen patikanin silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public pathDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PathResponse> {
        const path = this.basePath('/ctrl/path/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling pathDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('pathDeletePOST');
        return <Observable<PathResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('pathDeletePOST'); });
    }
    

    /**
     * Bir sanal ağ üzerindeki seçilen patika detayını dönen fonksiyon.
     * 
     * @param request Belirtilen patika anahtar numarasına göre ilgili patikayı döner.
     */
    public pathGetPOST (request: PathRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PathListResponse> {
        const path = this.basePath('/ctrl/path/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling pathGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('pathGetPOST');
        return <Observable<PathListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('pathGetPOST'); });
    }
    

    /**
     * Bir sanal ağ üzerindeki tüm patikaların listesini dönen fonksiyon.
     * 
     * @param request Belirtilen sanal ağ numarası ve varsa source ve destination arasindaki patikaları listeler.
     */
    public pathListPOST (request: PathListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PathListResponse> {
        const path = this.basePath('/ctrl/path/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling pathListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('pathListPOST');
        return <Observable<PathListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('pathListPOST'); });
    }
    

    /**
     * Bir topolojiye patika tanımı yapılması için kullanılarn metod.
     * 
     * @param request Belirtilen src ve dst hostları arasında patika oluşturur.
     */
    public pathSavePOST (request: PathRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PathListResponse> {
        const path = this.basePath('/ctrl/path/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling pathSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('pathSavePOST');
        return <Observable<PathListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('pathSavePOST'); });
    }
    

    /**
     * Bir sanal ağ üzerindeki seçilen patika detayını dönen fonksiyon.
     * 
     * @param request Belirtilen patika anahtar numarasına göre ilgili patikayı döner.
     */
    public pathValidatePOST (request: PathRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<PathListResponse> {
        const path = this.basePath('/ctrl/path/validate');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling pathValidatePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('pathValidatePOST');
        return <Observable<PathListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('pathValidatePOST'); });
    }
    

}

