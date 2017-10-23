//imports start PermResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {PermDTO,PermDTODef} from "./PermDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PermResponse extends GenericResponse {
   data?: PermDTO;

}


export var PermResponseDef:IModelDef = {
    meta: {
        className: 'PermResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: PermDTODef }

    }),
    toString:()=>{
        return 'PermResponse';
    }
};



