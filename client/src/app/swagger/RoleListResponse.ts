//imports start RoleListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {RoleListDTO,RoleListDTODef} from "./RoleListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface RoleListResponse extends GenericResponse {
   data: RoleListDTO;

}


export var RoleListResponseDef:IModelDef = {
    meta: {
        className: 'RoleListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: RoleListDTODef, required: true }

    }),
    toString:()=>{
        return 'RoleListResponse';
    }
};



