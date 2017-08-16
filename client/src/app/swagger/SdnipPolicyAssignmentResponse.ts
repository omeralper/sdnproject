//imports start SdnipPolicyAssignmentResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SdnipPolicyAssignmentDTO,SdnipPolicyAssignmentDTODef} from "./SdnipPolicyAssignmentDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipPolicyAssignmentResponse extends GenericResponse {
   data: SdnipPolicyAssignmentDTO;

}


export var SdnipPolicyAssignmentResponseDef:IModelDef = {
    meta: {
        className: 'SdnipPolicyAssignmentResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SdnipPolicyAssignmentDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipPolicyAssignmentResponse';
    }
};



