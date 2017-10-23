//imports start NetworkDeviceRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NetworkDeviceDTO,NetworkDeviceDTODef} from "./NetworkDeviceDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetworkDeviceRequest extends GenericRequest {
   data: NetworkDeviceDTO;

}


export var NetworkDeviceRequestDef:IModelDef = {
    meta: {
        className: 'NetworkDeviceRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: NetworkDeviceDTODef, required: true }

    }),
    toString:()=>{
        return 'NetworkDeviceRequest';
    }
};



