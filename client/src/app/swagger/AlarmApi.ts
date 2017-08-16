'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {AlarmResponse} from "./AlarmResponse";
import {GenericResponse} from "./GenericResponse";
import {GenericIdRequest} from "./GenericIdRequest";
import {GenericListRequest} from "./GenericListRequest";
import {AlarmListResponse} from "./AlarmListResponse";
import {AlarmRequest} from "./AlarmRequest";
import {GenericSearchRequest} from "./GenericSearchRequest";
import {AlarmNotificationResponse} from "./AlarmNotificationResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {AlarmNotificationListResponse} from "./AlarmNotificationListResponse";
import {AlarmNotificationRequest} from "./AlarmNotificationRequest";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class AlarmApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * ID değeri kullanılarak alarm tanımlamalarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public alarmDefinitionGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmResponse> {
        const path = this.basePath('/alrm/alarm/definition/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmDefinitionGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmDefinitionGetPOST');
        return <Observable<AlarmResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmDefinitionGetPOST'); });
    }
    

    /**
     * ID değeri kullanılarak alarm tanımlamalarının listelendiği fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public alarmDefinitionListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmListResponse> {
        const path = this.basePath('/alrm/alarm/definition/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmDefinitionListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmDefinitionListPOST');
        return <Observable<AlarmListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmDefinitionListPOST'); });
    }
    

    /**
     * ID değeri kullanılarak alarm tanımlamalarının güncellendiği fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public alarmDefinitionUpdatePOST (request: AlarmRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmResponse> {
        const path = this.basePath('/alrm/alarm/definition/update');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmDefinitionUpdatePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmDefinitionUpdatePOST');
        return <Observable<AlarmResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmDefinitionUpdatePOST'); });
    }
    

    /**
     * ID değeri kullanılarak alarm detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public alarmEditPOST (request: AlarmRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmResponse> {
        const path = this.basePath('/alrm/alarm/edit');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmEditPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmEditPOST');
        return <Observable<AlarmResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmEditPOST'); });
    }
    

    /**
     * ID değeri kullanılarak alarm detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public alarmGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmResponse> {
        const path = this.basePath('/alrm/alarm/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmGetPOST');
        return <Observable<AlarmResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm alarm&#39;ın listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public alarmListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmListResponse> {
        const path = this.basePath('/alrm/alarm/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmListPOST');
        return <Observable<AlarmListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmListPOST'); });
    }
    

    /**
     * ID değeri kullanılarak alarm detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public alarmLogGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmResponse> {
        const path = this.basePath('/alrm/alarm/log/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmLogGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmLogGetPOST');
        return <Observable<AlarmResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmLogGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm alarm&#39;ın listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public alarmLogListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmListResponse> {
        const path = this.basePath('/alrm/alarm/log/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmLogListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmLogListPOST');
        return <Observable<AlarmListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmLogListPOST'); });
    }
    

    /**
     * Sistemdeki alarm verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public alarmLogSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmListResponse> {
        const path = this.basePath('/alrm/alarm/log/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmLogSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmLogSearchPOST');
        return <Observable<AlarmListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmLogSearchPOST'); });
    }
    

    /**
     * ID değeri kullanılarak alarm bildirim konfigürasyonlarının silindiği fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public alarmNotificationDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmNotificationResponse> {
        const path = this.basePath('/alrm/alarm/notification/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmNotificationDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmNotificationDeletePOST');
        return <Observable<AlarmNotificationResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmNotificationDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak alarm tanımlamasının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public alarmNotificationGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmNotificationResponse> {
        const path = this.basePath('/alrm/alarm/notification/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmNotificationGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmNotificationGetPOST');
        return <Observable<AlarmNotificationResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmNotificationGetPOST'); });
    }
    

    /**
     * ID değeri kullanılarak alarm tanımlamalarının listelendiği fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public alarmNotificationListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmNotificationListResponse> {
        const path = this.basePath('/alrm/alarm/notification/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmNotificationListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmNotificationListPOST');
        return <Observable<AlarmNotificationListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmNotificationListPOST'); });
    }
    

    /**
     * ID değeri kullanılarak alarm tanımlamalarının güncellendiği/kaydedildiği fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public alarmNotificationSavePOST (request: AlarmNotificationRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmNotificationResponse> {
        const path = this.basePath('/alrm/alarm/notification/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmNotificationSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmNotificationSavePOST');
        return <Observable<AlarmNotificationResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmNotificationSavePOST'); });
    }
    

    /**
     * Sistemdeki alarm verileri arasında arama yapmak için kullanılan fonksiyon.
     * 
     * @param request Arama parametrelerinin belirtildiği veri yapısı.
     */
    public alarmSearchPOST (request: GenericSearchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<AlarmListResponse> {
        const path = this.basePath('/alrm/alarm/search');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling alarmSearchPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('alarmSearchPOST');
        return <Observable<AlarmListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('alarmSearchPOST'); });
    }
    

}

