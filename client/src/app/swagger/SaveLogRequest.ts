//imports start SaveLogRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {LogDTO,LogDTODef} from "./LogDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SaveLogRequest extends GenericRequest {
   data: LogDTO;

}


export var SaveLogRequestDef:IModelDef = {
    meta: {
        className: 'SaveLogRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: LogDTODef, required: true }

    }),
    toString:()=>{
        return 'SaveLogRequest';
    }
};



