//imports start NacDeviceListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacDeviceListDTO,NacDeviceListDTODef} from "./NacDeviceListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacDeviceListResponse extends GenericResponse {
   data: NacDeviceListDTO;

}


export var NacDeviceListResponseDef:IModelDef = {
    meta: {
        className: 'NacDeviceListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacDeviceListDTODef, required: true }

    }),
    toString:()=>{
        return 'NacDeviceListResponse';
    }
};



