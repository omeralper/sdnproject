//imports start DhcpIpReservedResponse

import {DhcpIpReservedDTO,DhcpIpReservedDTODef} from "./DhcpIpReservedDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpReservedResponse extends GenericResponse {
   data: DhcpIpReservedDTO;

}


export var DhcpIpReservedResponseDef:IModelDef = {
    meta: {
        className: 'DhcpIpReservedResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpIpReservedDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpReservedResponse';
    }
};



