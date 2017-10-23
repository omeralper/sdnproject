//imports start ProactivePathPolicyRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {ProactivePathPolicyDTO,ProactivePathPolicyDTODef} from "./ProactivePathPolicyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ProactivePathPolicyRequest extends GenericRequest {
   data: ProactivePathPolicyDTO;

}


export var ProactivePathPolicyRequestDef:IModelDef = {
    meta: {
        className: 'ProactivePathPolicyRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: ProactivePathPolicyDTODef, required: true }

    }),
    toString:()=>{
        return 'ProactivePathPolicyRequest';
    }
};



