//imports start MeterListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MeterListDTO,MeterListDTODef} from "./MeterListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MeterListResponse extends GenericResponse {
   data: MeterListDTO;

}


export var MeterListResponseDef:IModelDef = {
    meta: {
        className: 'MeterListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MeterListDTODef, required: true }

    }),
    toString:()=>{
        return 'MeterListResponse';
    }
};



