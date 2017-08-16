//imports start DhcpScopeListResponse

import {DhcpScopeListDTO,DhcpScopeListDTODef} from "./DhcpScopeListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpScopeListResponse extends GenericResponse {
   data: DhcpScopeListDTO;

}


export var DhcpScopeListResponseDef:IModelDef = {
    meta: {
        className: 'DhcpScopeListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpScopeListDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpScopeListResponse';
    }
};



