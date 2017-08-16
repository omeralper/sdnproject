//imports start AccessPolicyResponse

import {AccessPolicyDTO,AccessPolicyDTODef} from "./AccessPolicyDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessPolicyResponse extends GenericResponse {
   data?: AccessPolicyDTO;

}


export var AccessPolicyResponseDef:IModelDef = {
    meta: {
        className: 'AccessPolicyResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AccessPolicyDTODef }

    }),
    toString:()=>{
        return 'AccessPolicyResponse';
    }
};



