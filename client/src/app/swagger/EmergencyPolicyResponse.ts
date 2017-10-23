//imports start EmergencyPolicyResponse

import {EmergencyPolicyDTO,EmergencyPolicyDTODef} from "./EmergencyPolicyDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EmergencyPolicyResponse extends GenericResponse {
   data?: EmergencyPolicyDTO;

}


export var EmergencyPolicyResponseDef:IModelDef = {
    meta: {
        className: 'EmergencyPolicyResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: EmergencyPolicyDTODef }

    }),
    toString:()=>{
        return 'EmergencyPolicyResponse';
    }
};



