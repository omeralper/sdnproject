//imports start NacDeviceRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NacDeviceDTO,NacDeviceDTODef} from "./NacDeviceDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacDeviceRequest extends GenericRequest {
   data: NacDeviceDTO;

}


export var NacDeviceRequestDef:IModelDef = {
    meta: {
        className: 'NacDeviceRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: NacDeviceDTODef, required: true }

    }),
    toString:()=>{
        return 'NacDeviceRequest';
    }
};



