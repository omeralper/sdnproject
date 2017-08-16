//imports start MeterListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {MeterRequestDTO,MeterRequestDTODef} from "./MeterRequestDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MeterListRequest extends GenericRequest {
   data: MeterRequestDTO;

}


export var MeterListRequestDef:IModelDef = {
    meta: {
        className: 'MeterListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: MeterRequestDTODef, required: true }

    }),
    toString:()=>{
        return 'MeterListRequest';
    }
};



