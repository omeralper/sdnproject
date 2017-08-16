//imports start DhcpIpPoolResponse

import {DhcpIpPoolDTO,DhcpIpPoolDTODef} from "./DhcpIpPoolDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpPoolResponse extends GenericResponse {
   data: DhcpIpPoolDTO;

}


export var DhcpIpPoolResponseDef:IModelDef = {
    meta: {
        className: 'DhcpIpPoolResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpIpPoolDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpPoolResponse';
    }
};



