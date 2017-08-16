//imports start AlarmNotificationRequest

import {AlarmNotificationDTO,AlarmNotificationDTODef} from "./AlarmNotificationDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AlarmNotificationRequest extends GenericRequest {
   data?: AlarmNotificationDTO;

}


export var AlarmNotificationRequestDef:IModelDef = {
    meta: {
        className: 'AlarmNotificationRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: AlarmNotificationDTODef }

    }),
    toString:()=>{
        return 'AlarmNotificationRequest';
    }
};



