//imports start LogLevelListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {LogLevelListDTO,LogLevelListDTODef} from "./LogLevelListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LogLevelListResponse extends GenericResponse {
   data: LogLevelListDTO;

}


export var LogLevelListResponseDef:IModelDef = {
    meta: {
        className: 'LogLevelListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: LogLevelListDTODef, required: true }

    }),
    toString:()=>{
        return 'LogLevelListResponse';
    }
};



