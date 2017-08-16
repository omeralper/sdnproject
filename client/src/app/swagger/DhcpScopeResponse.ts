//imports start DhcpScopeResponse

import {DhcpScopeDTO,DhcpScopeDTODef} from "./DhcpScopeDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpScopeResponse extends GenericResponse {
   data: DhcpScopeDTO;

}


export var DhcpScopeResponseDef:IModelDef = {
    meta: {
        className: 'DhcpScopeResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpScopeDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpScopeResponse';
    }
};



