//imports start DhcpIpExcludedRequest

import {DhcpIpExcludedDTO,DhcpIpExcludedDTODef} from "./DhcpIpExcludedDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpExcludedRequest extends GenericRequest {
   data: DhcpIpExcludedDTO;

}


export var DhcpIpExcludedRequestDef:IModelDef = {
    meta: {
        className: 'DhcpIpExcludedRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: DhcpIpExcludedDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpExcludedRequest';
    }
};



