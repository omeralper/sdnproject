//imports start ProactivePathPolicyResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {ProactivePathPolicyDTO,ProactivePathPolicyDTODef} from "./ProactivePathPolicyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ProactivePathPolicyResponse extends GenericResponse {
   data: ProactivePathPolicyDTO;

}


export var ProactivePathPolicyResponseDef:IModelDef = {
    meta: {
        className: 'ProactivePathPolicyResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ProactivePathPolicyDTODef, required: true }

    }),
    toString:()=>{
        return 'ProactivePathPolicyResponse';
    }
};



