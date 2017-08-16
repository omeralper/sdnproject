//imports start WanMvtnInfoListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {WanMvtnInfoListDTO,WanMvtnInfoListDTODef} from "./WanMvtnInfoListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanMvtnInfoListResponse extends GenericResponse {
   data: WanMvtnInfoListDTO;

}


export var WanMvtnInfoListResponseDef:IModelDef = {
    meta: {
        className: 'WanMvtnInfoListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: WanMvtnInfoListDTODef, required: true }

    }),
    toString:()=>{
        return 'WanMvtnInfoListResponse';
    }
};



