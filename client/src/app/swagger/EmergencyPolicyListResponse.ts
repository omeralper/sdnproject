//imports start EmergencyPolicyListResponse

import {EmergencyPolicyListDTO,EmergencyPolicyListDTODef} from "./EmergencyPolicyListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EmergencyPolicyListResponse extends GenericResponse {
   data: EmergencyPolicyListDTO;

}


export var EmergencyPolicyListResponseDef:IModelDef = {
    meta: {
        className: 'EmergencyPolicyListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: EmergencyPolicyListDTODef, required: true }

    }),
    toString:()=>{
        return 'EmergencyPolicyListResponse';
    }
};



