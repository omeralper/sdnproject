//imports start PrognetDeviceListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SwitchListDTO,SwitchListDTODef} from "./SwitchListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PrognetDeviceListResponse extends GenericResponse {
   data: SwitchListDTO;

}


export var PrognetDeviceListResponseDef:IModelDef = {
    meta: {
        className: 'PrognetDeviceListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SwitchListDTODef, required: true }

    }),
    toString:()=>{
        return 'PrognetDeviceListResponse';
    }
};



