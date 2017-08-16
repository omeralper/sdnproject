//imports start SdnipPolicySaveRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {SdnipPolicyDTO,SdnipPolicyDTODef} from "./SdnipPolicyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipPolicySaveRequest extends GenericRequest {
   data: SdnipPolicyDTO;

}


export var SdnipPolicySaveRequestDef:IModelDef = {
    meta: {
        className: 'SdnipPolicySaveRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: SdnipPolicyDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipPolicySaveRequest';
    }
};



