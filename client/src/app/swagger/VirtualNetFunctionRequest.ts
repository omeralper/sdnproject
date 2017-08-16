//imports start VirtualNetFunctionRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {VirtualNetFunctionDTO,VirtualNetFunctionDTODef} from "./VirtualNetFunctionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VirtualNetFunctionRequest extends GenericRequest {
   data: VirtualNetFunctionDTO;

}


export var VirtualNetFunctionRequestDef:IModelDef = {
    meta: {
        className: 'VirtualNetFunctionRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: VirtualNetFunctionDTODef, required: true }

    }),
    toString:()=>{
        return 'VirtualNetFunctionRequest';
    }
};



