//imports start NacUserDeviceListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacUserDeviceListDTO,NacUserDeviceListDTODef} from "./NacUserDeviceListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserDeviceListResponse extends GenericResponse {
   data: NacUserDeviceListDTO;

}


export var NacUserDeviceListResponseDef:IModelDef = {
    meta: {
        className: 'NacUserDeviceListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacUserDeviceListDTODef, required: true }

    }),
    toString:()=>{
        return 'NacUserDeviceListResponse';
    }
};



