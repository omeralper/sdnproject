//imports start LogResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LogResponse extends GenericResponse {

}


export var LogResponseDef:IModelDef = {
    meta: {
        className: 'LogResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

    }),
    toString:()=>{
        return 'LogResponse';
    }
};



