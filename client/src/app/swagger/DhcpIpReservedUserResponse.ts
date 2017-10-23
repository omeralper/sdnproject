//imports start DhcpIpReservedUserResponse

import {DhcpIpReservedUserDTO,DhcpIpReservedUserDTODef} from "./DhcpIpReservedUserDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpReservedUserResponse extends GenericResponse {
   data: DhcpIpReservedUserDTO;

}


export var DhcpIpReservedUserResponseDef:IModelDef = {
    meta: {
        className: 'DhcpIpReservedUserResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpIpReservedUserDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpReservedUserResponse';
    }
};



