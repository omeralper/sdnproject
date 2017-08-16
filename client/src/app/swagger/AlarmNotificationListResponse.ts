//imports start AlarmNotificationListResponse

import {AlarmNotificationListDTO,AlarmNotificationListDTODef} from "./AlarmNotificationListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AlarmNotificationListResponse extends GenericResponse {
   data?: AlarmNotificationListDTO;

}


export var AlarmNotificationListResponseDef:IModelDef = {
    meta: {
        className: 'AlarmNotificationListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AlarmNotificationListDTODef }

    }),
    toString:()=>{
        return 'AlarmNotificationListResponse';
    }
};



