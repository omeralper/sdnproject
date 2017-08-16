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
import {NacChangeUserPwdRequest} from "./NacChangeUserPwdRequest";
import {NacSetUserPwdRequest} from "./NacSetUserPwdRequest";
import {NacUsernameRequest} from "./NacUsernameRequest";
import {NacUserResponse} from "./NacUserResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {NacForgettenPasswordRequest} from "./NacForgettenPasswordRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {GenericListRequest} from "./GenericListRequest";
import {NacUserListResponse} from "./NacUserListResponse";
import {NacUserRequest} from "./NacUserRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";
import {NacUserStatusResponse} from "./NacUserStatusResponse";
import {NacUserStatusRequest} from "./NacUserStatusRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class NacUserApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Son kullanıcıların kendi şifrelerini değiştirmek için kullanacakları fonksiyondur.
     * 
     * @param request Şifre değişikliği isteği.
     */
    public changepwdPOST (request: NacChangeUserPwdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<GenericResponse> {
        const path = this.basePath('/nas/auth/changepwd');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling changepwdPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('changepwdPOST');
        return <Observable<GenericResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('changepwdPOST'); });
    }
    

    /**
     * Bir son kullanıcının şifresini değiştirmek için kullanılan fonksiyon.
     * 
     * @param request Şifre değişikliği isteği.
     */
    public setpwdPOST (request: NacSetUserPwdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<GenericResponse> {
        const path = this.basePath('/nas/auth/setpwd');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling setpwdPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('setpwdPOST');
        return <Observable<GenericResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('setpwdPOST'); });
    }
    

    /**
     * Bir son kullanıcı adının uygun olup olmadığını kontrol eden fonksiyon. Yeni kullanıcı tanımlarken kullanılacaktır.
     * 
     * @param request Kontrol edilecek kullanıcı adı isteği.
     */
    public userCheckusrPOST (request: NacUsernameRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<GenericResponse> {
        const path = this.basePath('/nas/user/checkusr');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userCheckusrPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userCheckusrPOST');
        return <Observable<GenericResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userCheckusrPOST'); });
    }
    

    /**
     * Son kullanıcı verilerinin silinmesini sağlayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public userDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacUserResponse> {
        const path = this.basePath('/nas/user/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userDeletePOST');
        return <Observable<NacUserResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userDeletePOST'); });
    }
    

    /**
     * Nac Login şifremi unuttum sayfası
     * 
     * @param request Kontrol edilecek kullanıcı adı isteği.
     */
    public userForgetPOST (request: NacForgettenPasswordRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<GenericResponse> {
        const path = this.basePath('/nas/user/forget');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userForgetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userForgetPOST');
        return <Observable<GenericResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userForgetPOST'); });
    }
    

    /**
     * ID değeri kullanılarak son kullanıcı detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public userGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacUserResponse> {
        const path = this.basePath('/nas/user/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userGetPOST');
        return <Observable<NacUserResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm son kullanıcıların listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public userListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacUserListResponse> {
        const path = this.basePath('/nas/user/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userListPOST');
        return <Observable<NacUserListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userListPOST'); });
    }
    

    /**
     * Son kullanıcı verilerinin saklanmasını sağlayan fonksiyondur.
     * Son kullanıcı verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID değeri olmayan veri modelleri veri tabanında oluşturulacaktır. ID değeri olanlar için güncelleme yapılacaktır.
     * @param request Son kullanıcı veri transfer modelini taşıyan istek nesnesi.
     */
    public userSavePOST (request: NacUserRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacUserResponse> {
        const path = this.basePath('/nas/user/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userSavePOST');
        return <Observable<NacUserResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userSavePOST'); });
    }
    

    /**
     * Sistemdeki son kullanıcı verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public userSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacUserListResponse> {
        const path = this.basePath('/nas/user/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userSearchPOST');
        return <Observable<NacUserListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userSearchPOST'); });
    }
    

    /**
     * Sistemdeki tüm son kullanıcıların statuslerini editleyen fonksiyon.
     * 
     * @param request Genel status nesnesi.
     */
    public userStatusPOST (request: NacUserStatusRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacUserStatusResponse> {
        const path = this.basePath('/nas/user/status');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling userStatusPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('userStatusPOST');
        return <Observable<NacUserStatusResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('userStatusPOST'); });
    }
    

}

