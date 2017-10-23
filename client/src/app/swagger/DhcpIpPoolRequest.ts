//imports start DhcpIpPoolRequest

import {DhcpIpPoolDTO,DhcpIpPoolDTODef} from "./DhcpIpPoolDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpPoolRequest extends GenericRequest {
   data: DhcpIpPoolDTO;

}


export var DhcpIpPoolRequestDef:IModelDef = {
    meta: {
        className: 'DhcpIpPoolRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: DhcpIpPoolDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpPoolRequest';
    }
};



