//imports start DhcpIpReservedListResponse

import {DhcpIpReservedListDTO,DhcpIpReservedListDTODef} from "./DhcpIpReservedListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpReservedListResponse extends GenericResponse {
   data: DhcpIpReservedListDTO;

}


export var DhcpIpReservedListResponseDef:IModelDef = {
    meta: {
        className: 'DhcpIpReservedListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpIpReservedListDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpReservedListResponse';
    }
};



