//imports start DhcpIpReservedUserListResponse

import {DhcpIpReservedUserListDTO,DhcpIpReservedUserListDTODef} from "./DhcpIpReservedUserListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpReservedUserListResponse extends GenericResponse {
   data: DhcpIpReservedUserListDTO;

}


export var DhcpIpReservedUserListResponseDef:IModelDef = {
    meta: {
        className: 'DhcpIpReservedUserListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpIpReservedUserListDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpReservedUserListResponse';
    }
};



