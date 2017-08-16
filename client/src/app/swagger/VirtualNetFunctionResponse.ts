//imports start VirtualNetFunctionResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {VirtualNetFunctionDTO,VirtualNetFunctionDTODef} from "./VirtualNetFunctionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VirtualNetFunctionResponse extends GenericResponse {
   data?: VirtualNetFunctionDTO;

}


export var VirtualNetFunctionResponseDef:IModelDef = {
    meta: {
        className: 'VirtualNetFunctionResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: VirtualNetFunctionDTODef }

    }),
    toString:()=>{
        return 'VirtualNetFunctionResponse';
    }
};



