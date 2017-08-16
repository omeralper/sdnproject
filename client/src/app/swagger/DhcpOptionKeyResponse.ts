//imports start DhcpOptionKeyResponse

import {DhcpOptionKeyDTO,DhcpOptionKeyDTODef} from "./DhcpOptionKeyDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpOptionKeyResponse extends GenericResponse {
   data: DhcpOptionKeyDTO;

}


export var DhcpOptionKeyResponseDef:IModelDef = {
    meta: {
        className: 'DhcpOptionKeyResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpOptionKeyDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpOptionKeyResponse';
    }
};



