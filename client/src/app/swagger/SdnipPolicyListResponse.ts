//imports start SdnipPolicyListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SdnipPolicyListDTO,SdnipPolicyListDTODef} from "./SdnipPolicyListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipPolicyListResponse extends GenericResponse {
   data: SdnipPolicyListDTO;

}


export var SdnipPolicyListResponseDef:IModelDef = {
    meta: {
        className: 'SdnipPolicyListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SdnipPolicyListDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipPolicyListResponse';
    }
};



