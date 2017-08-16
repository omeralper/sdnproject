//imports start AccessPolicyListResponse

import {AccessPolicyListDTO,AccessPolicyListDTODef} from "./AccessPolicyListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessPolicyListResponse extends GenericResponse {
   data: AccessPolicyListDTO;

}


export var AccessPolicyListResponseDef:IModelDef = {
    meta: {
        className: 'AccessPolicyListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AccessPolicyListDTODef, required: true }

    }),
    toString:()=>{
        return 'AccessPolicyListResponse';
    }
};



