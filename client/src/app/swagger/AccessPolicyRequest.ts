//imports start AccessPolicyRequest

import {AccessPolicyDTO,AccessPolicyDTODef} from "./AccessPolicyDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessPolicyRequest extends GenericRequest {
   data: AccessPolicyDTO;

}


export var AccessPolicyRequestDef:IModelDef = {
    meta: {
        className: 'AccessPolicyRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: AccessPolicyDTODef, required: true }

    }),
    toString:()=>{
        return 'AccessPolicyRequest';
    }
};



