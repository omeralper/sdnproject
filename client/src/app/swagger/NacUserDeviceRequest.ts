//imports start NacUserDeviceRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NacUserDeviceDTO,NacUserDeviceDTODef} from "./NacUserDeviceDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserDeviceRequest extends GenericRequest {
   data: NacUserDeviceDTO;

}


export var NacUserDeviceRequestDef:IModelDef = {
    meta: {
        className: 'NacUserDeviceRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: NacUserDeviceDTODef, required: true }

    }),
    toString:()=>{
        return 'NacUserDeviceRequest';
    }
};



