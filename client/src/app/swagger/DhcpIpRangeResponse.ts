//imports start DhcpIpRangeResponse

import {DhcpIpRangeDTO,DhcpIpRangeDTODef} from "./DhcpIpRangeDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpRangeResponse extends GenericResponse {
   data: DhcpIpRangeDTO;

}


export var DhcpIpRangeResponseDef:IModelDef = {
    meta: {
        className: 'DhcpIpRangeResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpIpRangeDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpRangeResponse';
    }
};



