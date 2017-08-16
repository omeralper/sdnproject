//imports start EmergencyPolicyRequest

import {EmergencyPolicyDTO,EmergencyPolicyDTODef} from "./EmergencyPolicyDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EmergencyPolicyRequest extends GenericRequest {
   data: EmergencyPolicyDTO;

}


export var EmergencyPolicyRequestDef:IModelDef = {
    meta: {
        className: 'EmergencyPolicyRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: EmergencyPolicyDTODef, required: true }

    }),
    toString:()=>{
        return 'EmergencyPolicyRequest';
    }
};



