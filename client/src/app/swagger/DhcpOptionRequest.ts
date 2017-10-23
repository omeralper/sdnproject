//imports start DhcpOptionRequest

import {DhcpOptionDTO,DhcpOptionDTODef} from "./DhcpOptionDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpOptionRequest extends GenericRequest {
   data: DhcpOptionDTO;

}


export var DhcpOptionRequestDef:IModelDef = {
    meta: {
        className: 'DhcpOptionRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: DhcpOptionDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpOptionRequest';
    }
};



