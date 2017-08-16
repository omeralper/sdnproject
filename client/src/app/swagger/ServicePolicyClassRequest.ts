//imports start ServicePolicyClassRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {ServicePolicyClassDTO,ServicePolicyClassDTODef} from "./ServicePolicyClassDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ServicePolicyClassRequest extends GenericRequest {
   data: ServicePolicyClassDTO;

}


export var ServicePolicyClassRequestDef:IModelDef = {
    meta: {
        className: 'ServicePolicyClassRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: ServicePolicyClassDTODef, required: true }

    }),
    toString:()=>{
        return 'ServicePolicyClassRequest';
    }
};



