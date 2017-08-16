//imports start VirtualNetFunctionListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {VirtualNetFunctionListDTO,VirtualNetFunctionListDTODef} from "./VirtualNetFunctionListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VirtualNetFunctionListResponse extends GenericResponse {
   data: VirtualNetFunctionListDTO;

}


export var VirtualNetFunctionListResponseDef:IModelDef = {
    meta: {
        className: 'VirtualNetFunctionListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: VirtualNetFunctionListDTODef, required: true }

    }),
    toString:()=>{
        return 'VirtualNetFunctionListResponse';
    }
};



