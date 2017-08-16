//imports start VirtualNetFunctionInstanceListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {VirtualNetFunctionInstanceListDTO,VirtualNetFunctionInstanceListDTODef} from "./VirtualNetFunctionInstanceListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VirtualNetFunctionInstanceListResponse extends GenericResponse {
   data: VirtualNetFunctionInstanceListDTO;

}


export var VirtualNetFunctionInstanceListResponseDef:IModelDef = {
    meta: {
        className: 'VirtualNetFunctionInstanceListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: VirtualNetFunctionInstanceListDTODef, required: true }

    }),
    toString:()=>{
        return 'VirtualNetFunctionInstanceListResponse';
    }
};



