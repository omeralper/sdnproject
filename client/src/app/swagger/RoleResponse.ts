//imports start RoleResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {RoleDTO,RoleDTODef} from "./RoleDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface RoleResponse extends GenericResponse {
   data?: RoleDTO;

}


export var RoleResponseDef:IModelDef = {
    meta: {
        className: 'RoleResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: RoleDTODef }

    }),
    toString:()=>{
        return 'RoleResponse';
    }
};



