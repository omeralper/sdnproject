//imports start PrognetDeviceResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SwitchDTO,SwitchDTODef} from "./SwitchDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PrognetDeviceResponse extends GenericResponse {
   data: SwitchDTO;

}


export var PrognetDeviceResponseDef:IModelDef = {
    meta: {
        className: 'PrognetDeviceResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SwitchDTODef, required: true }

    }),
    toString:()=>{
        return 'PrognetDeviceResponse';
    }
};



