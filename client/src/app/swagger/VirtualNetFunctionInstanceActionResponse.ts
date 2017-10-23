//imports start VirtualNetFunctionInstanceActionResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VirtualNetFunctionInstanceActionResponse extends GenericResponse {
   osResponse: string;

}


export var VirtualNetFunctionInstanceActionResponseDef:IModelDef = {
    meta: {
        className: 'VirtualNetFunctionInstanceActionResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        osResponse : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'VirtualNetFunctionInstanceActionResponse';
    }
};



