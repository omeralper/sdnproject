//imports start MvtnListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MvtnListDTO,MvtnListDTODef} from "./MvtnListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnListResponse extends GenericResponse {
   data: MvtnListDTO;

}


export var MvtnListResponseDef:IModelDef = {
    meta: {
        className: 'MvtnListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MvtnListDTODef, required: true }

    }),
    toString:()=>{
        return 'MvtnListResponse';
    }
};



