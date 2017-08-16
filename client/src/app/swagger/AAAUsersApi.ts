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
import {ChangePwdRequest} from "./ChangePwdRequest";
import {UsernameRequest} from "./UsernameRequest";
import {UserResponse} from "./UserResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {GenericListRequest} from "./GenericListRequest";
import {UserListResponse} from "./UserListResponse";
import {UserRequest} from "./UserRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";
import {SetPwdRequest} from "./SetPwdRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class AAAUsersApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Kullanıcıların kendi şifrelerini değiştirmek için kullanacakları fonksiyondur.
     * 
     * @param request Şifre değişikliği isteği.
     */
    public aaaUserChangepwdPOST (request: ChangePwdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<GenericResponse> {
        const path = this.basePath('/capi/aaa/user/changepwd');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaUserChangepwdPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaUserChangepwdPOST');
        return <Observable<GenericResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaUserChangepwdPOST'); });
    }
    

    /**
     * Bir kullanıcı adının uygun olup olmadığını kontrol eden fonksiyon. Yeni kullanıcı tanımlarken kullanılacaktır.
     * 
     * @param request Kontrol edilecek kullanıcı adı isteği.
     */
    public aaaUserCheckusrPOST (request: UsernameRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<GenericResponse> {
        const path = this.basePath('/capi/aaa/user/checkusr');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaUserCheckusrPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaUserCheckusrPOST');
        return <Observable<GenericResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaUserCheckusrPOST'); });
    }
    

    /**
     * Kullanıcı verilerinin silinmesini sağlayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public aaaUserDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<UserResponse> {
        const path = this.basePath('/capi/aaa/user/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaUserDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaUserDeletePOST');
        return <Observable<UserResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaUserDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak kullanıcı detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public aaaUserGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<UserResponse> {
        const path = this.basePath('/capi/aaa/user/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaUserGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaUserGetPOST');
        return <Observable<UserResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaUserGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm kullanıcıların listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public aaaUserListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<UserListResponse> {
        const path = this.basePath('/capi/aaa/user/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaUserListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaUserListPOST');
        return <Observable<UserListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaUserListPOST'); });
    }
    

    /**
     * Kullanıcı verilerinin saklanmasını sağlayan fonksiyondur.
     * Kullanıcı verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID değeri olmayan veri modelleri veri tabanında oluşturulacaktır. ID değeri olanlar için güncelleme yapılacaktır.
     * @param request Kullanıcı veri transfer modelini taşıyan istek nesnesi.
     */
    public aaaUserSavePOST (request: UserRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<UserResponse> {
        const path = this.basePath('/capi/aaa/user/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaUserSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaUserSavePOST');
        return <Observable<UserResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaUserSavePOST'); });
    }
    

    /**
     * Sistemdeki kullanıcı verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public aaaUserSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<UserListResponse> {
        const path = this.basePath('/capi/aaa/user/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaUserSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaUserSearchPOST');
        return <Observable<UserListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaUserSearchPOST'); });
    }
    

    /**
     * Bir kullanıcının şifresini değiştirmek için kullanılan fonksiyon.
     * 
     * @param request Şifre değişikliği isteği.
     */
    public aaaUserSetpwdPOST (request: SetPwdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<GenericResponse> {
        const path = this.basePath('/capi/aaa/user/setpwd');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaUserSetpwdPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaUserSetpwdPOST');
        return <Observable<GenericResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaUserSetpwdPOST'); });
    }
    

}

