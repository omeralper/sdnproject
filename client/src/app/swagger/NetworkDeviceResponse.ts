//imports start NetworkDeviceResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NetworkDeviceDTO,NetworkDeviceDTODef} from "./NetworkDeviceDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetworkDeviceResponse extends GenericResponse {
   data: NetworkDeviceDTO;

}


export var NetworkDeviceResponseDef:IModelDef = {
    meta: {
        className: 'NetworkDeviceResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NetworkDeviceDTODef, required: true }

    }),
    toString:()=>{
        return 'NetworkDeviceResponse';
    }
};



