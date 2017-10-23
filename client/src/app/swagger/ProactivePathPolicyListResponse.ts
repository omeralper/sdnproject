//imports start ProactivePathPolicyListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {ProactivePathPolicyListDTO,ProactivePathPolicyListDTODef} from "./ProactivePathPolicyListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ProactivePathPolicyListResponse extends GenericResponse {
   data: ProactivePathPolicyListDTO;

}


export var ProactivePathPolicyListResponseDef:IModelDef = {
    meta: {
        className: 'ProactivePathPolicyListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ProactivePathPolicyListDTODef, required: true }

    }),
    toString:()=>{
        return 'ProactivePathPolicyListResponse';
    }
};



