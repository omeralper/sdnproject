//imports start MonitorAlarmSetResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MonitorAlarmSetDTO,MonitorAlarmSetDTODef} from "./MonitorAlarmSetDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorAlarmSetResponse extends GenericResponse {
   data: MonitorAlarmSetDTO;

}


export var MonitorAlarmSetResponseDef:IModelDef = {
    meta: {
        className: 'MonitorAlarmSetResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MonitorAlarmSetDTODef, required: true }

    }),
    toString:()=>{
        return 'MonitorAlarmSetResponse';
    }
};



