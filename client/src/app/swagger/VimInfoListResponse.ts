//imports start VimInfoListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {VimInfoListDTO,VimInfoListDTODef} from "./VimInfoListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimInfoListResponse extends GenericResponse {
   data: VimInfoListDTO;

}


export var VimInfoListResponseDef:IModelDef = {
    meta: {
        className: 'VimInfoListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: VimInfoListDTODef, required: true }

    }),
    toString:()=>{
        return 'VimInfoListResponse';
    }
};



