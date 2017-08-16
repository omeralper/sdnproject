'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {NacSessionResponse} from "./NacSessionResponse";
import {GenericResponse} from "./GenericResponse";
import {GenericIdRequest} from "./GenericIdRequest";
import {GenericRequest} from "./GenericRequest";
import {NacSessionCountResponse} from "./NacSessionCountResponse";
import {NacLoginResponse} from "./NacLoginResponse";
import {NacLoginRequest} from "./NacLoginRequest";
import {NacUsernameRequest} from "./NacUsernameRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class NacAuthApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * NAC için IP, UserId sorgusu REST servisi
     * 
     * @param request Sorgu için IP addresi kullanılacaktır. Boş IP adresi gelmesi durumunda exception üretilecektir.
     */
    public getsessionPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacSessionResponse> {
        const path = this.basePath('/nas/auth/getsession');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling getsessionPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('getsessionPOST');
        return <Observable<NacSessionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('getsessionPOST'); });
    }
    

    /**
     * aktif kullanıcı sorgulayan REST servisi
     * 
     * @param request Sorgu için IP addresi kullanılacaktır. Boş IP adresi gelmesi durumunda exception üretilecektir.
     */
    public getsessioncountPOST (request: GenericRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacSessionCountResponse> {
        const path = this.basePath('/nas/auth/getsessioncount');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling getsessioncountPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('getsessioncountPOST');
        return <Observable<NacSessionCountResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('getsessioncountPOST'); });
    }
    

    /**
     * Son kullanıcıların sisteme giriş yapmaları için kullanılacak fonksiyondur.
     * 
     * @param request Giriş için gerekli verilerin bulunduğu veri yapısı.
     */
    public loginPOST (request: NacLoginRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NacLoginResponse> {
        const path = this.basePath('/nas/auth/login');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling loginPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('loginPOST');
        return <Observable<NacLoginResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('loginPOST'); });
    }
    

    /**
     * Son kullanıcının sistemden çıkış yapması için kullanılacak fonksiyondur.
     * 
     * @param request Çıkış için session ID değeri kullanılacaktır. Boş değer gönderilmesi durumunda mevcut session&#39;dan çıkış yapılacaktır.
     */
    public logoutPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<GenericResponse> {
        const path = this.basePath('/nas/auth/logout');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling logoutPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('logoutPOST');
        return <Observable<GenericResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('logoutPOST'); });
    }
    

    /**
     * Son kullanıcıların şifrelerini unutmaları durumunda kullanabilecekleri fonksiyondur.
     * Son kullanıcıların şifrelerini unutmaları durumunda şifrelerini sıfırlamak için bu fonksiyon kullanılacaktır.\n\nBu fonksiyonun kritik özelliği, belirtilen kullanıcı adı sistemde _**olmasa bile hata vermemelidir**_.\nKullanıcı adının olması durumunda ise kullanıcıya e-posta ile şifre değiştirme ekranına yönlendirilmelidir.
     * @param request 
     */
    public lostpwdPOST (request: NacUsernameRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<GenericResponse> {
        const path = this.basePath('/nas/auth/lostpwd');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling lostpwdPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('lostpwdPOST');
        return <Observable<GenericResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('lostpwdPOST'); });
    }
    

}

