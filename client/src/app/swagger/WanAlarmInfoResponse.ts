//imports start WanAlarmInfoResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {WanAlarmInfoDTO,WanAlarmInfoDTODef} from "./WanAlarmInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanAlarmInfoResponse extends GenericResponse {
   data: WanAlarmInfoDTO;

}


export var WanAlarmInfoResponseDef:IModelDef = {
    meta: {
        className: 'WanAlarmInfoResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: WanAlarmInfoDTODef, required: true }

    }),
    toString:()=>{
        return 'WanAlarmInfoResponse';
    }
};



