'use strict';

import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {ApiHelper} from "../modules/ApiHelper";
import {UIHelper} from "../modules/UIHelper";
import {BaseApi} from "../commons/BaseApi";
import {NetServiceDescResponse} from "./NetServiceDescResponse";
import {GenericResponse} from "./GenericResponse";
import {GenericDeleteRequest} from "./GenericDeleteRequest";
import {GenericIdRequest} from "./GenericIdRequest";
import {GenericListRequest} from "./GenericListRequest";
import {NetServiceDescListResponse} from "./NetServiceDescListResponse";
import {NetServiceDescRequest} from "./NetServiceDescRequest";
import {NetServiceRecordResponse} from "./NetServiceRecordResponse";
import {NetServiceRecordListResponse} from "./NetServiceRecordListResponse";
import {NetServiceRecordLaunchRequest} from "./NetServiceRecordLaunchRequest";
import {NetServiceRecordRequest} from "./NetServiceRecordRequest";
import {ComputeHostResponse} from "./ComputeHostResponse";
import {ComputeHostRequest} from "./ComputeHostRequest";
import {ComputeHostStatisticResponse} from "./ComputeHostStatisticResponse";
import {ComputeHostStatisticRequest} from "./ComputeHostStatisticRequest";
import {ComputeHostListRequest} from "./ComputeHostListRequest";
import {ComputeHostListResponse} from "./ComputeHostListResponse";
import {ComputeHostStatisticListResponse} from "./ComputeHostStatisticListResponse";
import {ComputeHostStatisticListRequest} from "./ComputeHostStatisticListRequest";
import {VimInfoListResponse} from "./VimInfoListResponse";
import {VirtualNetFunctionInstanceActionRequest} from "./VirtualNetFunctionInstanceActionRequest";
import {VirtualNetFunctionInstanceActionResponse} from "./VirtualNetFunctionInstanceActionResponse";
import {VimVmStatusInfoRequest} from "./VimVmStatusInfoRequest";
import {VimVmStatusInfoResponse} from "./VimVmStatusInfoResponse";
import {VirtualNetFunctionResponse} from "./VirtualNetFunctionResponse";
import {VnfActionResponse} from "./VnfActionResponse";
import {VnfActionRequest} from "./VnfActionRequest";
import {VirtualNetFunctionListResponse} from "./VirtualNetFunctionListResponse";
import {VirtualNetFunctionRequest} from "./VirtualNetFunctionRequest";
import {VirtualNetFunctionInstanceListRequest} from "./VirtualNetFunctionInstanceListRequest";
import {VirtualNetFunctionInstanceListResponse} from "./VirtualNetFunctionInstanceListResponse";
import {VnfciActionResponse} from "./VnfciActionResponse";

/* tslint:disable:no-unused-variable member-ordering */                      



@Injectable()
export class NFVApi  extends BaseApi {

    constructor(protected http: Http,protected uiHelper:UIHelper,protected apiHelper:ApiHelper) {
        super(http,uiHelper,apiHelper);
    }

    protected basePath(path:string){
        return ['//',this.apiHelper.getServerAddress(), '/prognetnm/api/1.4.3', path].join('');
    }


    /**
     * İstenen ağ servis tanımı&#39;ın silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public nsdDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetServiceDescResponse> {
        const path = this.basePath('/nfva/nsd/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling nsdDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('nsdDeletePOST');
        return <Observable<NetServiceDescResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('nsdDeletePOST'); });
    }
    

    /**
     * ID değeri kullanılarak ağ servis tanımı detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public nsdGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetServiceDescResponse> {
        const path = this.basePath('/nfva/nsd/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling nsdGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('nsdGetPOST');
        return <Observable<NetServiceDescResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('nsdGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm ağ servis tanımları&#39;ın listesini dönen fonksiyon.
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public nsdListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetServiceDescListResponse> {
        const path = this.basePath('/nfva/nsd/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling nsdListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('nsdListPOST');
        return <Observable<NetServiceDescListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('nsdListPOST'); });
    }
    

    /**
     * Ağ servis tanımı verilerinin saklanmasını sağlayan fonksiyondur.
     * Ağ servis tanımı verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID boş olması durumunda Insert işlemi yapılmalıdır.
     * @param request Ağ servis tanımı veri transfer modelini taşıyan istek nesnesi.
     */
    public nsdSavePOST (request: NetServiceDescRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetServiceDescResponse> {
        const path = this.basePath('/nfva/nsd/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling nsdSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('nsdSavePOST');
        return <Observable<NetServiceDescResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('nsdSavePOST'); });
    }
    

    /**
     * ID değeri kullanılarak ağ servis kayıdını durduran fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public nsrDeletePOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetServiceRecordResponse> {
        const path = this.basePath('/nfva/nsr/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling nsrDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('nsrDeletePOST');
        return <Observable<NetServiceRecordResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('nsrDeletePOST'); });
    }
    

    /**
     * Çalıştırılmış ağı görüntüler
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public nsrGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetServiceRecordResponse> {
        const path = this.basePath('/nfva/nsr/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling nsrGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('nsrGetPOST');
        return <Observable<NetServiceRecordResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('nsrGetPOST'); });
    }
    

    /**
     * Çalıştırılmış ağların tümünü listeler
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public nsrListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetServiceRecordListResponse> {
        const path = this.basePath('/nfva/nsr/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling nsrListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('nsrListPOST');
        return <Observable<NetServiceRecordListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('nsrListPOST'); });
    }
    

    /**
     * ID değeri kullanılarak ağ servis kayıdını çalıştıran fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public nsrSavePOST (request: NetServiceRecordLaunchRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetServiceRecordResponse> {
        const path = this.basePath('/nfva/nsr/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling nsrSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('nsrSavePOST');
        return <Observable<NetServiceRecordResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('nsrSavePOST'); });
    }
    

    /**
     * ID değeri kullanılarak ağ servis kayıdını çalıştıran fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public nsrUpdatePOST (request: NetServiceRecordRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetServiceRecordResponse> {
        const path = this.basePath('/nfva/nsr/update');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling nsrUpdatePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('nsrUpdatePOST');
        return <Observable<NetServiceRecordResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('nsrUpdatePOST'); });
    }
    

    /**
     * Sistemde ki ip degerine gore compute host&#39;u doner
     * 
     * @param request Genel istek yapılmasını sağlayan veri modeli.
     */
    public vimComputeHostGetByIpPOST (request: ComputeHostRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ComputeHostResponse> {
        const path = this.basePath('/nfva/vim/computeHost/getByIp');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vimComputeHostGetByIpPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vimComputeHostGetByIpPOST');
        return <Observable<ComputeHostResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vimComputeHostGetByIpPOST'); });
    }
    

    /**
     * Sistemde ki compute host&#39;un genel istatistiki degerini doner
     * 
     * @param request Genel istek yapılmasını sağlayan veri modeli.
     */
    public vimComputeHostGetStatisticPOST (request: ComputeHostStatisticRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ComputeHostStatisticResponse> {
        const path = this.basePath('/nfva/vim/computeHost/getStatistic');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vimComputeHostGetStatisticPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vimComputeHostGetStatisticPOST');
        return <Observable<ComputeHostStatisticResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vimComputeHostGetStatisticPOST'); });
    }
    

    /**
     * Compute host listesini doner
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public vimComputeHostListPOST (request: ComputeHostListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ComputeHostListResponse> {
        const path = this.basePath('/nfva/vim/computeHost/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vimComputeHostListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vimComputeHostListPOST');
        return <Observable<ComputeHostListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vimComputeHostListPOST'); });
    }
    

    /**
     * Compute host&#39;ta bulunan genel istatistiki bilgileri listeler
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public vimGetAllComputeHostStatisticPOST (request: ComputeHostStatisticListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<ComputeHostStatisticListResponse> {
        const path = this.basePath('/nfva/vim/getAllComputeHostStatistic');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vimGetAllComputeHostStatisticPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vimGetAllComputeHostStatisticPOST');
        return <Observable<ComputeHostStatisticListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vimGetAllComputeHostStatisticPOST'); });
    }
    

    /**
     * Sistem mevcut bütün VIM&#39;leri listeler
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public vimListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VimInfoListResponse> {
        const path = this.basePath('/nfva/vim/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vimListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vimListPOST');
        return <Observable<VimInfoListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vimListPOST'); });
    }
    

    /**
     * Sistemde ki compute host&#39;un genel istatistiki degerini doner
     * 
     * @param request Genel istek yapılmasını sağlayan veri modeli.
     */
    public vimVmRestartPOST (request: VirtualNetFunctionInstanceActionRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionInstanceActionResponse> {
        const path = this.basePath('/nfva/vim/vm/restart');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vimVmRestartPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vimVmRestartPOST');
        return <Observable<VirtualNetFunctionInstanceActionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vimVmRestartPOST'); });
    }
    

    /**
     * Sistemde ki compute host&#39;un genel istatistiki degerini doner
     * 
     * @param request Genel istek yapılmasını sağlayan veri modeli.
     */
    public vimVmStartPOST (request: VirtualNetFunctionInstanceActionRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionInstanceActionResponse> {
        const path = this.basePath('/nfva/vim/vm/start');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vimVmStartPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vimVmStartPOST');
        return <Observable<VirtualNetFunctionInstanceActionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vimVmStartPOST'); });
    }
    

    /**
     * OpenStack&#39;te olan sanal makinaların anlık durumunu gösterir
     * 
     * @param request Genel istek yapılmasını sağlayan veri modeli.
     */
    public vimVmStatusInfoPOST (request: VimVmStatusInfoRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VimVmStatusInfoResponse> {
        const path = this.basePath('/nfva/vim/vm/statusInfo');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vimVmStatusInfoPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vimVmStatusInfoPOST');
        return <Observable<VimVmStatusInfoResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vimVmStatusInfoPOST'); });
    }
    

    /**
     * Sistemde ki compute host&#39;un genel istatistiki degerini doner
     * 
     * @param request Genel istek yapılmasını sağlayan veri modeli.
     */
    public vimVmStopPOST (request: VirtualNetFunctionInstanceActionRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionInstanceActionResponse> {
        const path = this.basePath('/nfva/vim/vm/stop');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vimVmStopPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vimVmStopPOST');
        return <Observable<VirtualNetFunctionInstanceActionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vimVmStopPOST'); });
    }
    

    /**
     * Ip&#39;ye gore zone zone bilgisini getirir
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public vimZoneGetByIpPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetServiceRecordResponse> {
        const path = this.basePath('/nfva/vim/zone/getByIp');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vimZoneGetByIpPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vimZoneGetByIpPOST');
        return <Observable<NetServiceRecordResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vimZoneGetByIpPOST'); });
    }
    

    /**
     * Isime gore zone zone bilgisini getirir
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public vimZoneGetByNamePOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<NetServiceRecordResponse> {
        const path = this.basePath('/nfva/vim/zone/getByName');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vimZoneGetByNamePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vimZoneGetByNamePOST');
        return <Observable<NetServiceRecordResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vimZoneGetByNamePOST'); });
    }
    

    /**
     * Sistem mevcut bütün Zone&#39;ları listeler
     * 
     * @param request Genel listeleme istek nesnesi.
     */
    public vimZoneListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VimInfoListResponse> {
        const path = this.basePath('/nfva/vim/zone/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vimZoneListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vimZoneListPOST');
        return <Observable<VimInfoListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vimZoneListPOST'); });
    }
    

    /**
     * İstenen sanal ağ fonksiyonu tanımı&#39;ın silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public vnfDeletePOST (request: GenericDeleteRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionResponse> {
        const path = this.basePath('/nfva/vnf/delete');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfDeletePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfDeletePOST');
        return <Observable<VirtualNetFunctionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfDeletePOST'); });
    }
    

    /**
     * Calisması durdurulacak vnf&#39;in  isaretlenmesi
     * 
     * @param request aaa
     */
    public vnfDeregisterVnfFailOverPOST (request: VnfActionRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VnfActionResponse> {
        const path = this.basePath('/nfva/vnf/deregisterVnfFailOver');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfDeregisterVnfFailOverPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfDeregisterVnfFailOverPOST');
        return <Observable<VnfActionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfDeregisterVnfFailOverPOST'); });
    }
    

    /**
     * ID değeri kullanılarak sanal ağ fonksiyonu tanımı detaylarının alındığı fonksiyon.
     * 
     * @param request Genel ID değeri istek yapılmasını sağlayan veri modeli.
     */
    public vnfGetPOST (request: GenericIdRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionResponse> {
        const path = this.basePath('/nfva/vnf/get');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfGetPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfGetPOST');
        return <Observable<VirtualNetFunctionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfGetPOST'); });
    }
    

    /**
     * Sistemdeki tüm sanal ağ fonksiyonu tanımlaları&#39;ın listesini dönen fonksiyon.
     * 
     * @param request Sanal ağ fonksiyonu tanımı listeleme işlemi için kullanılacak veri modelidir.
     */
    public vnfListPOST (request: GenericListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionListResponse> {
        const path = this.basePath('/nfva/vnf/list');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfListPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfListPOST');
        return <Observable<VirtualNetFunctionListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfListPOST'); });
    }
    

    /**
     * Calisması durdurulacak vnf&#39;in  isaretlenmesi
     * 
     * @param request aaa
     */
    public vnfRegisterVnfFailOverPOST (request: VnfActionRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VnfActionResponse> {
        const path = this.basePath('/nfva/vnf/registerVnfFailOver');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfRegisterVnfFailOverPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfRegisterVnfFailOverPOST');
        return <Observable<VnfActionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfRegisterVnfFailOverPOST'); });
    }
    

    /**
     * İstenen  sanal ağ fonksiyonu tanımı&#39;ın çalışmasını saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public vnfRemoveVnfPOST (request: VnfActionRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VnfActionResponse> {
        const path = this.basePath('/nfva/vnf/removeVnf');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfRemoveVnfPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfRemoveVnfPOST');
        return <Observable<VnfActionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfRemoveVnfPOST'); });
    }
    

    /**
     * Sanal ağ fonksiyonu tanımı verilerinin saklanmasını sağlayan fonksiyondur.
     * Sanal ağ fonksiyonu tanımı verilerinin saklanmasını sağlayan fonksiyondur. (!)Dikkat: ID boş olması durumunda Insert işlemi yapılmalıdır.
     * @param request Sanal ağ fonksiyonu tanımı veri transfer modelini taşıyan istek nesnesi.
     */
    public vnfSavePOST (request: VirtualNetFunctionRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionResponse> {
        const path = this.basePath('/nfva/vnf/save');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfSavePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfSavePOST');
        return <Observable<VirtualNetFunctionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfSavePOST'); });
    }
    

    /**
     * Sistemde ki compute host&#39;un genel istatistiki degerini doner
     * 
     * @param request Genel istek yapılmasını sağlayan veri modeli.
     */
    public vnfSearchVnfInstanceInfoPOST (request: VirtualNetFunctionInstanceListRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionInstanceListResponse> {
        const path = this.basePath('/nfva/vnf/searchVnfInstanceInfo');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfSearchVnfInstanceInfoPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfSearchVnfInstanceInfoPOST');
        return <Observable<VirtualNetFunctionInstanceListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfSearchVnfInstanceInfoPOST'); });
    }
    

    /**
     * İstenen çalışan sanal ağ fonksiyonu silinmesini saglayan fonksiyon.
     * 
     * @param request Genel silme isteğinin belirtildiği veri yapısı.
     */
    public vnfStartVnfPOST (request: VnfActionRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VnfActionResponse> {
        const path = this.basePath('/nfva/vnf/startVnf');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfStartVnfPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfStartVnfPOST');
        return <Observable<VnfActionResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfStartVnfPOST'); });
    }
    

    /**
     * Sanal ağ fonksiyonu tanımı verilerinin saklanmasını sağlayan fonksiyondur.
     * Sanal ağ fonksiyonunun guncelleme servisi
     * @param request Sanal ağ fonksiyonu tanımı veri transfer modelini taşıyan istek nesnesi.
     */
    public vnfUpdatePOST (request: VirtualNetFunctionRequest, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionListResponse> {
        const path = this.basePath('/nfva/vnf/update');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfUpdatePOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfUpdatePOST');
        return <Observable<VirtualNetFunctionListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfUpdatePOST'); });
    }
    

    /**
     * Sistemde ki compute host&#39;un genel istatistiki degerini doner
     * 
     * @param request Genel istek yapılmasını sağlayan veri modeli.
     */
    public vnfVnfciStartPOST (request: VnfciActionResponse, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionInstanceListResponse> {
        const path = this.basePath('/nfva/vnf/vnfci/start');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfVnfciStartPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfVnfciStartPOST');
        return <Observable<VirtualNetFunctionInstanceListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfVnfciStartPOST'); });
    }
    

    /**
     * Sistemde ki compute host&#39;un genel istatistiki degerini doner
     * 
     * @param request Genel istek yapılmasını sağlayan veri modeli.
     */
    public vnfVnfciStartByIpPOST (request: VnfciActionResponse, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionInstanceListResponse> {
        const path = this.basePath('/nfva/vnf/vnfci/startByIp');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfVnfciStartByIpPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfVnfciStartByIpPOST');
        return <Observable<VirtualNetFunctionInstanceListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfVnfciStartByIpPOST'); });
    }
    

    /**
     * Sistemde ki compute host&#39;un genel istatistiki degerini doner
     * 
     * @param request Genel istek yapılmasını sağlayan veri modeli.
     */
    public vnfVnfciStopPOST (request: VnfciActionResponse, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionInstanceListResponse> {
        const path = this.basePath('/nfva/vnf/vnfci/stop');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfVnfciStopPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfVnfciStopPOST');
        return <Observable<VirtualNetFunctionInstanceListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfVnfciStopPOST'); });
    }
    

    /**
     * Sistemde ki compute host&#39;un genel istatistiki degerini doner
     * 
     * @param request Genel istek yapılmasını sağlayan veri modeli.
     */
    public vnfVnfciStopByIpPOST (request: VnfciActionResponse, isBlockUI:boolean=true, extraHttpRequestParams?: Headers ) : Observable<VirtualNetFunctionInstanceListResponse> {
        const path = this.basePath('/nfva/vnf/vnfci/stopByIp');

        let headerParams = new Headers(extraHttpRequestParams);
        headerParams.set('Content-Type', 'application/json');



        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling vnfVnfciStopByIpPOST');
        }else{
            var bodyParam = request;
            var body = JSON.stringify(bodyParam);
        }








        if (isBlockUI) this.block('vnfVnfciStopByIpPOST');
        return <Observable<VirtualNetFunctionInstanceListResponse>>this.http.post(path, body,{headers:headerParams})
            .map((response: Response) => response.json())
            .finally(()=>{ if (isBlockUI) this.unblock('vnfVnfciStopByIpPOST'); });
    }
    

}

