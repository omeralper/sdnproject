//imports start DhcpScopeRequest

import {DhcpScopeDTO,DhcpScopeDTODef} from "./DhcpScopeDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpScopeRequest extends GenericRequest {
   data: DhcpScopeDTO;

}


export var DhcpScopeRequestDef:IModelDef = {
    meta: {
        className: 'DhcpScopeRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: DhcpScopeDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpScopeRequest';
    }
};



