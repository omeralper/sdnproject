//imports start AlarmNotificationDTO

import {ALARMSOURCE,ALARMSOURCEDef} from "./ALARMSOURCE";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {SEVERITY,SEVERITYDef} from "./SEVERITY";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AlarmNotificationDTO extends BaseDTO {
   
    /**
    * Alarm önem derecesi
    */
    severity?: Array<SEVERITY>;
   
    /**
    * Alarmın bildirim konfigürasyonun son güncellendiği zaman
    */
    lastUpdateDate?: Date;
   
    /**
    * Alarm bildiriminin ilişkilendirildiği sanal ağlar isim bilgisi
    */
    mvtnName?: Array<string>;
   
    /**
    * Alarmı atan uygulama adı
    */
    source?: Array<ALARMSOURCE>;
   
    /**
    * Alarm bildiriminin ilişkilendirildiği sanal ağlar id bilgisi
    */
    mvtnId?: Array<number>;
   
    /**
    * Alarmın bildirim konfigürasyonun oluştuğu zaman
    */
    creationDate?: Date;
   
    /**
    * Alarm bildiriminin ilişkilendirildiği mail bilgisi
    */
    email?: Array<string>;

}


export var AlarmNotificationDTODef:IModelDef = {
    meta: {
        className: 'AlarmNotificationDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        severity : { type: 'Array' }, 

        lastUpdateDate : { type: 'Date' }, 

        mvtnName : { type: 'Array' }, 

        source : { type: 'Array' }, 

        mvtnId : { type: 'Array' }, 

        creationDate : { type: 'Date' }, 

        email : { type: 'Array' }

    }),
    toString:()=>{
        return 'AlarmNotificationDTO';
    }
};



