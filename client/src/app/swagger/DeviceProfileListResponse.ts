//imports start DeviceProfileListResponse

import {DeviceProfileListDTO,DeviceProfileListDTODef} from "./DeviceProfileListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DeviceProfileListResponse extends GenericResponse {
   data: DeviceProfileListDTO;

}


export var DeviceProfileListResponseDef:IModelDef = {
    meta: {
        className: 'DeviceProfileListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DeviceProfileListDTODef, required: true }

    }),
    toString:()=>{
        return 'DeviceProfileListResponse';
    }
};



