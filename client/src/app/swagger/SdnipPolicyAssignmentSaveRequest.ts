//imports start SdnipPolicyAssignmentSaveRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {SdnipPolicyAssignmentDTO,SdnipPolicyAssignmentDTODef} from "./SdnipPolicyAssignmentDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipPolicyAssignmentSaveRequest extends GenericRequest {
   data: SdnipPolicyAssignmentDTO;

}


export var SdnipPolicyAssignmentSaveRequestDef:IModelDef = {
    meta: {
        className: 'SdnipPolicyAssignmentSaveRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: SdnipPolicyAssignmentDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipPolicyAssignmentSaveRequest';
    }
};



