//imports start VimInfoResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {VimInfoDTO,VimInfoDTODef} from "./VimInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimInfoResponse extends GenericResponse {
   data?: VimInfoDTO;

}


export var VimInfoResponseDef:IModelDef = {
    meta: {
        className: 'VimInfoResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: VimInfoDTODef }

    }),
    toString:()=>{
        return 'VimInfoResponse';
    }
};



