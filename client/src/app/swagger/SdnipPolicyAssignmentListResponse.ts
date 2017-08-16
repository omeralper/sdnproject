//imports start SdnipPolicyAssignmentListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SdnipPolicyAssignmentListDTO,SdnipPolicyAssignmentListDTODef} from "./SdnipPolicyAssignmentListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipPolicyAssignmentListResponse extends GenericResponse {
   data: SdnipPolicyAssignmentListDTO;

}


export var SdnipPolicyAssignmentListResponseDef:IModelDef = {
    meta: {
        className: 'SdnipPolicyAssignmentListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SdnipPolicyAssignmentListDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipPolicyAssignmentListResponse';
    }
};



