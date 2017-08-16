//imports start NetServiceRecordLaunchRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NetServiceRecordLaunchDTO,NetServiceRecordLaunchDTODef} from "./NetServiceRecordLaunchDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordLaunchRequest extends GenericRequest {
   
    /**
    * Başlatma isteği detay verileri
    */
    data: NetServiceRecordLaunchDTO;
   
    /**
    * İligli NSD ID değeri
    */
    nsdId?: string;

}


export var NetServiceRecordLaunchRequestDef:IModelDef = {
    meta: {
        className: 'NetServiceRecordLaunchRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: NetServiceRecordLaunchDTODef, required: true }, 

        nsdId : { type: 'string' }

    }),
    toString:()=>{
        return 'NetServiceRecordLaunchRequest';
    }
};



