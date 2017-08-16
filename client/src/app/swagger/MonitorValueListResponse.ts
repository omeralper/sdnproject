//imports start MonitorValueListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MonitorValueListDTO,MonitorValueListDTODef} from "./MonitorValueListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorValueListResponse extends GenericResponse {
   data: MonitorValueListDTO;

}


export var MonitorValueListResponseDef:IModelDef = {
    meta: {
        className: 'MonitorValueListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MonitorValueListDTODef, required: true }

    }),
    toString:()=>{
        return 'MonitorValueListResponse';
    }
};



