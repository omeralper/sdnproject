//imports start NacDeviceResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacDeviceDTO,NacDeviceDTODef} from "./NacDeviceDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacDeviceResponse extends GenericResponse {
   data?: NacDeviceDTO;

}


export var NacDeviceResponseDef:IModelDef = {
    meta: {
        className: 'NacDeviceResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacDeviceDTODef }

    }),
    toString:()=>{
        return 'NacDeviceResponse';
    }
};



