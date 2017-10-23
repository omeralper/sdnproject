//imports start DhcpIpRangeRequest

import {DhcpIpRangeDTO,DhcpIpRangeDTODef} from "./DhcpIpRangeDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpRangeRequest extends GenericRequest {
   data: DhcpIpRangeDTO;

}


export var DhcpIpRangeRequestDef:IModelDef = {
    meta: {
        className: 'DhcpIpRangeRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: DhcpIpRangeDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpRangeRequest';
    }
};



