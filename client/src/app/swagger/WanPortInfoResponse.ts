//imports start WanPortInfoResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {WanPortInfoDTO,WanPortInfoDTODef} from "./WanPortInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanPortInfoResponse extends GenericResponse {
   data: WanPortInfoDTO;

}


export var WanPortInfoResponseDef:IModelDef = {
    meta: {
        className: 'WanPortInfoResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: WanPortInfoDTODef, required: true }

    }),
    toString:()=>{
        return 'WanPortInfoResponse';
    }
};



