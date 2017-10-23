//imports start PathListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {PathListDTO,PathListDTODef} from "./PathListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PathListResponse extends GenericResponse {
   data: PathListDTO;

}


export var PathListResponseDef:IModelDef = {
    meta: {
        className: 'PathListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: PathListDTODef, required: true }

    }),
    toString:()=>{
        return 'PathListResponse';
    }
};



