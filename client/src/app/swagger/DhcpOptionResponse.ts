//imports start DhcpOptionResponse

import {DhcpOptionDTO,DhcpOptionDTODef} from "./DhcpOptionDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpOptionResponse extends GenericResponse {
   data: DhcpOptionDTO;

}


export var DhcpOptionResponseDef:IModelDef = {
    meta: {
        className: 'DhcpOptionResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpOptionDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpOptionResponse';
    }
};



