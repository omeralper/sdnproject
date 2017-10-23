//imports start VimVmStatusInfoResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {VimVmStatusInfoDTO,VimVmStatusInfoDTODef} from "./VimVmStatusInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimVmStatusInfoResponse extends GenericResponse {
   data?: VimVmStatusInfoDTO;

}


export var VimVmStatusInfoResponseDef:IModelDef = {
    meta: {
        className: 'VimVmStatusInfoResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: VimVmStatusInfoDTODef }

    }),
    toString:()=>{
        return 'VimVmStatusInfoResponse';
    }
};



