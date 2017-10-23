//imports start PermListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {PermListDTO,PermListDTODef} from "./PermListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PermListResponse extends GenericResponse {
   data: PermListDTO;

}


export var PermListResponseDef:IModelDef = {
    meta: {
        className: 'PermListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: PermListDTODef, required: true }

    }),
    toString:()=>{
        return 'PermListResponse';
    }
};



