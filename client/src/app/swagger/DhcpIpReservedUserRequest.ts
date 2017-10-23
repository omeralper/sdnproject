//imports start DhcpIpReservedUserRequest

import {DhcpIpReservedUserDTO,DhcpIpReservedUserDTODef} from "./DhcpIpReservedUserDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpReservedUserRequest extends GenericRequest {
   data: DhcpIpReservedUserDTO;

}


export var DhcpIpReservedUserRequestDef:IModelDef = {
    meta: {
        className: 'DhcpIpReservedUserRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: DhcpIpReservedUserDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpReservedUserRequest';
    }
};



