//imports start AlarmNotificationListDTO

import {AlarmNotificationDTO,AlarmNotificationDTODef} from "./AlarmNotificationDTO";
import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AlarmNotificationListDTO extends BaseListDTO {
   
    /**
    * Alarm bildirim konfigürasyon modellerinin bulunduğu listedir.
    */
    list: Array<AlarmNotificationDTO>;

}


export var AlarmNotificationListDTODef:IModelDef = {
    meta: {
        className: 'AlarmNotificationListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'AlarmNotificationListDTO';
    }
};



