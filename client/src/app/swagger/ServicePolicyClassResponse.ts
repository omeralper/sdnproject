//imports start ServicePolicyClassResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {ServicePolicyClassDTO,ServicePolicyClassDTODef} from "./ServicePolicyClassDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ServicePolicyClassResponse extends GenericResponse {
   data?: ServicePolicyClassDTO;

}


export var ServicePolicyClassResponseDef:IModelDef = {
    meta: {
        className: 'ServicePolicyClassResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ServicePolicyClassDTODef }

    }),
    toString:()=>{
        return 'ServicePolicyClassResponse';
    }
};



