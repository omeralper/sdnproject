//imports start SaveLogListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {LogDTO,LogDTODef} from "./LogDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SaveLogListRequest extends GenericRequest {
   data: Array<LogDTO>;

}


export var SaveLogListRequestDef:IModelDef = {
    meta: {
        className: 'SaveLogListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SaveLogListRequest';
    }
};



