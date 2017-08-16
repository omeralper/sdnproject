//imports start MonitorAlarmSetRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {MonitorAlarmSetDTO,MonitorAlarmSetDTODef} from "./MonitorAlarmSetDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorAlarmSetRequest extends GenericRequest {
   data: MonitorAlarmSetDTO;

}


export var MonitorAlarmSetRequestDef:IModelDef = {
    meta: {
        className: 'MonitorAlarmSetRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: MonitorAlarmSetDTODef, required: true }

    }),
    toString:()=>{
        return 'MonitorAlarmSetRequest';
    }
};



