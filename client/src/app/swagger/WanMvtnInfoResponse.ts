//imports start WanMvtnInfoResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {WanMvtnInfoDTO,WanMvtnInfoDTODef} from "./WanMvtnInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanMvtnInfoResponse extends GenericResponse {
   data: WanMvtnInfoDTO;

}


export var WanMvtnInfoResponseDef:IModelDef = {
    meta: {
        className: 'WanMvtnInfoResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: WanMvtnInfoDTODef, required: true }

    }),
    toString:()=>{
        return 'WanMvtnInfoResponse';
    }
};



