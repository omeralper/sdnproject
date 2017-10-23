//imports start SfcListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SfcListDTO,SfcListDTODef} from "./SfcListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SfcListResponse extends GenericResponse {
   data: SfcListDTO;

}


export var SfcListResponseDef:IModelDef = {
    meta: {
        className: 'SfcListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SfcListDTODef, required: true }

    }),
    toString:()=>{
        return 'SfcListResponse';
    }
};



