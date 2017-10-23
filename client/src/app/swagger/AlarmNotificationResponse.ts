//imports start AlarmNotificationResponse

import {AlarmNotificationDTO,AlarmNotificationDTODef} from "./AlarmNotificationDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AlarmNotificationResponse extends GenericResponse {
   data?: AlarmNotificationDTO;

}


export var AlarmNotificationResponseDef:IModelDef = {
    meta: {
        className: 'AlarmNotificationResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AlarmNotificationDTODef }

    }),
    toString:()=>{
        return 'AlarmNotificationResponse';
    }
};



