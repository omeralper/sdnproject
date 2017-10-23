//imports start ServicePolicyClassListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {ServicePolicyClassListDTO,ServicePolicyClassListDTODef} from "./ServicePolicyClassListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ServicePolicyClassListResponse extends GenericResponse {
   data: ServicePolicyClassListDTO;

}


export var ServicePolicyClassListResponseDef:IModelDef = {
    meta: {
        className: 'ServicePolicyClassListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ServicePolicyClassListDTODef, required: true }

    }),
    toString:()=>{
        return 'ServicePolicyClassListResponse';
    }
};



