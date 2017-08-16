//imports start VnfrRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {VnfrDTO,VnfrDTODef} from "./VnfrDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfrRequest extends GenericRequest {
   data: VnfrDTO;

}


export var VnfrRequestDef:IModelDef = {
    meta: {
        className: 'VnfrRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: VnfrDTODef, required: true }

    }),
    toString:()=>{
        return 'VnfrRequest';
    }
};



