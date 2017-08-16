//imports start DhcpIpReservedRequest

import {DhcpIpReservedDTO,DhcpIpReservedDTODef} from "./DhcpIpReservedDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpReservedRequest extends GenericRequest {
   data: DhcpIpReservedDTO;

}


export var DhcpIpReservedRequestDef:IModelDef = {
    meta: {
        className: 'DhcpIpReservedRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: DhcpIpReservedDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpReservedRequest';
    }
};



