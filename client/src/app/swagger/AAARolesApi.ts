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
import {RoleResponse} from "./RoleResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {GenericListRequest} from "./GenericListRequest";
import {RoleListResponse} from "./RoleListResponse";
import {RoleRequest} from "./RoleRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class AAARolesApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Rol verilerinin silinmesini sağlayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public aaaRoleDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<RoleResponse> {
        const path = this.basePath('/capi/aaa/role/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaRoleDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaRoleDeletePOST');
        return <Observable<RoleResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaRoleDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak Rol detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public aaaRoleGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<RoleResponse> {
        const path = this.basePath('/capi/aaa/role/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaRoleGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaRoleGetPOST');
        return <Observable<RoleResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaRoleGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm rollerin listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public aaaRoleListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<RoleListResponse> {
        const path = this.basePath('/capi/aaa/role/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaRoleListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaRoleListPOST');
        return <Observable<RoleListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaRoleListPOST'); });
    }
    

    /**
     * Rol verilerinin saklanmasını sağlayan fonksiyondur.
     * Rol verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID değeri olmayan veri modelleri veri tabanında oluşturulacaktır. ID değeri olanlar için güncelleme yapılacaktır.
     * @param request Rol veri transfer modelini taşıyan istek nesnesi.
     */
    public aaaRoleSavePOST (request: RoleRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<RoleResponse> {
        const path = this.basePath('/capi/aaa/role/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaRoleSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaRoleSavePOST');
        return <Observable<RoleResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaRoleSavePOST'); });
    }
    

    /**
     * Sistemdeki rol verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public aaaRoleSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<RoleListResponse> {
        const path = this.basePath('/capi/aaa/role/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaRoleSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaRoleSearchPOST');
        return <Observable<RoleListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaRoleSearchPOST'); });
    }
    

}

