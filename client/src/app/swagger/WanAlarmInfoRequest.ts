//imports start WanAlarmInfoRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {WanMvtnInfoDTO,WanMvtnInfoDTODef} from "./WanMvtnInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanAlarmInfoRequest extends GenericRequest {
   data: WanMvtnInfoDTO;

}


export var WanAlarmInfoRequestDef:IModelDef = {
    meta: {
        className: 'WanAlarmInfoRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: WanMvtnInfoDTODef, required: true }

    }),
    toString:()=>{
        return 'WanAlarmInfoRequest';
    }
};



