//imports start NacUserDeviceResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacUserDeviceDTO,NacUserDeviceDTODef} from "./NacUserDeviceDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserDeviceResponse extends GenericResponse {
   data?: NacUserDeviceDTO;

}


export var NacUserDeviceResponseDef:IModelDef = {
    meta: {
        className: 'NacUserDeviceResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacUserDeviceDTODef }

    }),
    toString:()=>{
        return 'NacUserDeviceResponse';
    }
};



