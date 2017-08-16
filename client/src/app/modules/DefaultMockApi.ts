import {Injectable} from '@angular/core';
import * as lib from  '../swagger/api';
import {getTopologyMockResponseJSON} from "./JSONs";

/* tslint:disable:no-unused-variable member-ordering */


'use strict';


@Injectable()
export class DefaultMockApi {

    constructor() {
        
    }


    /**
     * Ağ topolojisinin detaylarının alınması için kullanılan fonksiyondur.
     * 
     * @param request Topoloji isteğinin detaylarının bulunduğu veri yapısı.
     */
    public topologyGetPost (request: lib.TopologyRequest, extraHttpRequestParams?: any ) : lib.TopologyResponse{


        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling getTopology');
        }

        return getTopologyMockResponseJSON;
    }
    

    /**
     * Tek bir günlük mesajının arka uç’a iletilmesi için kullanılır.
     * 
     * @param request Günlük verilerinin bulunduğu veri yapısı
     */
    public saveLog (request: lib.SaveLogRequest, extraHttpRequestParams?: any ){
       

        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling saveLog');
        }







        //return (response: LogResponse);
    }
    

    /**
     * Topluca günlük mesajlarının arka uç’a iletilmesi için kullanılır.
     * 
     * @param requestList Günlük verilerinin bulunduğu veri yapısı
     */
    public saveLogList (requestList: lib.SaveLogListRequest, extraHttpRequestParams?: any ){

        // verify required parameter 'requestList' is set
        if (!requestList) {
            throw new Error('Missing required parameter requestList when calling saveLogList');
        }







        //return (response: LogResponse);
    }
    

}

