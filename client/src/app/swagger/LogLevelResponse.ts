//imports start LogLevelResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {LogLevelListDTO,LogLevelListDTODef} from "./LogLevelListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LogLevelResponse extends GenericResponse {
   data: LogLevelListDTO;

}


export var LogLevelResponseDef:IModelDef = {
    meta: {
        className: 'LogLevelResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: LogLevelListDTODef, required: true }

    }),
    toString:()=>{
        return 'LogLevelResponse';
    }
};



