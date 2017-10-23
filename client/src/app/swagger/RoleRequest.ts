//imports start RoleRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {RoleDTO,RoleDTODef} from "./RoleDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface RoleRequest extends GenericRequest {
   data: RoleDTO;

}


export var RoleRequestDef:IModelDef = {
    meta: {
        className: 'RoleRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: RoleDTODef, required: true }

    }),
    toString:()=>{
        return 'RoleRequest';
    }
};



