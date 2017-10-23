//imports start NetServiceDescRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NetServiceDescDTO,NetServiceDescDTODef} from "./NetServiceDescDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceDescRequest extends GenericRequest {
   data: NetServiceDescDTO;

}


export var NetServiceDescRequestDef:IModelDef = {
    meta: {
        className: 'NetServiceDescRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: NetServiceDescDTODef, required: true }

    }),
    toString:()=>{
        return 'NetServiceDescRequest';
    }
};



