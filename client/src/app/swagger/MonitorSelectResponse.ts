//imports start MonitorSelectResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MonitorInfoDTO,MonitorInfoDTODef} from "./MonitorInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorSelectResponse extends GenericResponse {
   data: MonitorInfoDTO;

}


export var MonitorSelectResponseDef:IModelDef = {
    meta: {
        className: 'MonitorSelectResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MonitorInfoDTODef, required: true }

    }),
    toString:()=>{
        return 'MonitorSelectResponse';
    }
};



