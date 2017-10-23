//imports start EdrListResponse

import {EdrListDTO,EdrListDTODef} from "./EdrListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EdrListResponse extends GenericResponse {
   data: EdrListDTO;

}


export var EdrListResponseDef:IModelDef = {
    meta: {
        className: 'EdrListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: EdrListDTODef, required: true }

    }),
    toString:()=>{
        return 'EdrListResponse';
    }
};



