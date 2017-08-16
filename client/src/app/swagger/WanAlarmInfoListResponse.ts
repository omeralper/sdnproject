//imports start WanAlarmInfoListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {WanAlarmInfoListDTO,WanAlarmInfoListDTODef} from "./WanAlarmInfoListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanAlarmInfoListResponse extends GenericResponse {
   data: WanAlarmInfoListDTO;

}


export var WanAlarmInfoListResponseDef:IModelDef = {
    meta: {
        className: 'WanAlarmInfoListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: WanAlarmInfoListDTODef, required: true }

    }),
    toString:()=>{
        return 'WanAlarmInfoListResponse';
    }
};



