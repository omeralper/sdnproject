//imports start SfcTypeListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SfcTypeListDTO,SfcTypeListDTODef} from "./SfcTypeListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SfcTypeListResponse extends GenericResponse {
   data: SfcTypeListDTO;

}


export var SfcTypeListResponseDef:IModelDef = {
    meta: {
        className: 'SfcTypeListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SfcTypeListDTODef, required: true }

    }),
    toString:()=>{
        return 'SfcTypeListResponse';
    }
};



