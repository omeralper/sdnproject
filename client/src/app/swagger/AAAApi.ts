'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {LoginResponse} from "./LoginResponse";
import {GenericResponse} from "./GenericResponse";
import {LoginRequest} from "./LoginRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {UsernameRequest} from "./UsernameRequest";
import {ApiCoreResponse} from "./ApiCoreResponse";
import {ApiCoreRequest} from "./ApiCoreRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class AAAApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * Sisteme giriş yapmak için kullanılacak fonksiyondur.
     * 
     * @param request Giriş için gerekli verilerin bulunduğu veri yapısı.
     */
    public aaaLoginPOST (request: LoginRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<LoginResponse> {
        const path = this.basePath('/capi/aaa/login');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaLoginPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaLoginPOST');
        return <Observable<LoginResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaLoginPOST'); });
    }
    

    /**
     * Sistemden çıkış yapmak için kullanılacak fonksiyondur.
     * 
     * @param request Çıkış için session ID değeri kullanılacaktır. Boş değer gönderilmesi durumunda mevcut session&#39;dan çıkış yapılacaktır.
     */
    public aaaLogoutPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<GenericResponse> {
        const path = this.basePath('/capi/aaa/logout');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaLogoutPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaLogoutPOST');
        return <Observable<GenericResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaLogoutPOST'); });
    }
    

    /**
     * Kullanıcıların şifrelerini unutmaları durumunda kullanabilecekleri fonksiyondur.
     * Kullanıcıların şifrelerini unutmaları durumunda şifrelerini sıfırlamak için bu fonksiyon kullanılacaktır.\n\nBu fonksiyonun kritik özelliği, belirtilen kullanıcı adı sistemde _**olmasa bile hata vermemelidir**_.\nKullanıcı adının olması durumunda ise kullanıcıya e-posta ile şifre değiştirme ekranına yönlendirilmelidir.
     * @param request 
     */
    public aaaLostpwdPOST (request: UsernameRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<GenericResponse> {
        const path = this.basePath('/capi/aaa/lostpwd');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aaaLostpwdPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('aaaLostpwdPOST');
        return <Observable<GenericResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaLostpwdPOST'); });
    }
    

    /**
     * Sistemde HTTP session&#39;ı açık tutmak için kullanılan fonksiyondur.
     * 
     * @param request Ping için kullanılacak generic response. Boş gönderilebilir.
     */
    public aaaPingPOST (request?: ApiCoreRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ApiCoreResponse> {
        const path = this.basePath('/capi/aaa/ping');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');




        var body = request? JSON.stringify(request) : '';







        if (isBlockUI) this.block('aaaPingPOST');
        return <Observable<ApiCoreResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('aaaPingPOST'); });
    }
    

}

