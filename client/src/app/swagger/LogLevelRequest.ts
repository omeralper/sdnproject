//imports start LogLevelRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {LogLevelDTO,LogLevelDTODef} from "./LogLevelDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LogLevelRequest extends GenericRequest {
   data: Array<LogLevelDTO>;

}


export var LogLevelRequestDef:IModelDef = {
    meta: {
        className: 'LogLevelRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'LogLevelRequest';
    }
};



