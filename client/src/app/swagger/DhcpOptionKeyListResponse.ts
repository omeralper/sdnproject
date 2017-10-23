//imports start DhcpOptionKeyListResponse

import {DhcpOptionKeyListDTO,DhcpOptionKeyListDTODef} from "./DhcpOptionKeyListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpOptionKeyListResponse extends GenericResponse {
   data: DhcpOptionKeyListDTO;

}


export var DhcpOptionKeyListResponseDef:IModelDef = {
    meta: {
        className: 'DhcpOptionKeyListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpOptionKeyListDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpOptionKeyListResponse';
    }
};



