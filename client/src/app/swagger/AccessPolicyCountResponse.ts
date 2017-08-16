//imports start AccessPolicyCountResponse

import {AccessPolicyCountOptions,AccessPolicyCountOptionsDef} from "./AccessPolicyCountOptions";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessPolicyCountResponse extends GenericResponse {
   data: AccessPolicyCountOptions;

}


export var AccessPolicyCountResponseDef:IModelDef = {
    meta: {
        className: 'AccessPolicyCountResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AccessPolicyCountOptionsDef, required: true }

    }),
    toString:()=>{
        return 'AccessPolicyCountResponse';
    }
};



