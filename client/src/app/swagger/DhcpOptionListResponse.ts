//imports start DhcpOptionListResponse

import {DhcpOptionListDTO,DhcpOptionListDTODef} from "./DhcpOptionListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpOptionListResponse extends GenericResponse {
   data: DhcpOptionListDTO;

}


export var DhcpOptionListResponseDef:IModelDef = {
    meta: {
        className: 'DhcpOptionListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpOptionListDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpOptionListResponse';
    }
};



