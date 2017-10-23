//imports start SdnipPolicyResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SdnipPolicyDTO,SdnipPolicyDTODef} from "./SdnipPolicyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipPolicyResponse extends GenericResponse {
   data: SdnipPolicyDTO;

}


export var SdnipPolicyResponseDef:IModelDef = {
    meta: {
        className: 'SdnipPolicyResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SdnipPolicyDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipPolicyResponse';
    }
};



