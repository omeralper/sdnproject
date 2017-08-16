//imports start MonitorValueResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MonitorValueDTO,MonitorValueDTODef} from "./MonitorValueDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorValueResponse extends GenericResponse {
   data: MonitorValueDTO;

}


export var MonitorValueResponseDef:IModelDef = {
    meta: {
        className: 'MonitorValueResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MonitorValueDTODef, required: true }

    }),
    toString:()=>{
        return 'MonitorValueResponse';
    }
};



