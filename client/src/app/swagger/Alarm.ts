//imports start Alarm

import {ALARMRESOURCE,ALARMRESOURCEDef} from "./ALARMRESOURCE";
import {ALARMSOURCE,ALARMSOURCEDef} from "./ALARMSOURCE";
import {ALARMSTATUS,ALARMSTATUSDef} from "./ALARMSTATUS";
import {ALARMTYPE,ALARMTYPEDef} from "./ALARMTYPE";
import {GUINOTIFICATION,GUINOTIFICATIONDef} from "./GUINOTIFICATION";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Uygulamalar tarafından alarm yöneticisine gönderilecek detaysız alarm objesi
*/
export interface Alarm {
   
    /**
    * Alarmın adı
    */
    name: string;
   
    /**
    * Alarma sebep olan kaynak
    */
    resource: ALARMRESOURCE;
   
    /**
    * Alarmı atan uygulamanın üzerinde çalıştığı makinenin adı ya da IP adresi
    */
    sourceHost: string;
   
    /**
    * Alarmı atan uygulamanın üzerinde çalıştığı uygulama sağlayıcısının numarası
    */
    sourceInstance: string;
   
    /**
    * Alarm durumu
    */
    status: ALARMSTATUS;
   
    /**
    * Alarm tipi (Event ya da Alarm)
    */
    type: ALARMTYPE;
   
    /**
    * Alarmı atan uygulamanın adı
    */
    source: ALARMSOURCE;
   
    /**
    * Alarm ile ilgili detaylı bilgi
    */
    detail: string;
   
    /**
    * Alarmın ilgili olduğu elemanın kimlik bilgisi
    */
    resourceId: string;
   
    /**
    * Alarmın ait olduğu sanal ağın id bilgisi
    */
    vtnId: string;
   
    /**
    * Alarmın ait olduğu sanal ağın isim bilgisi
    */
    vtnName?: string;
   
    /**
    * Alarmın kimin tarafından çözüldüğü bilgisi.
    */
    resolver: string;
   
    /**
    * Alarmı çözen kişinin notu.
    */
    resolveNote?: string;
   
    /**
    * #/definitions/REPORTING_METHOD
    */
    reportingMethod: string;
   
    /**
    * Alarmın çözüldüğü zaman
    */
    solveTime: Date;
   
    /**
    * Alarm tipi (Event ya da Alarm)
    */
    gUINotification?: GUINOTIFICATION;
   
    /**
    * İhityaç duyulan acil durum politikası id'leri
    */
    emergencyPolicyIdArray?: string;

}


export var AlarmDef:IModelDef = {
    meta: {
        className: 'Alarm',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        name : { type: 'string', required: true }, 

        resource : { type: ALARMRESOURCEDef, required: true }, 

        sourceHost : { type: 'string', required: true }, 

        sourceInstance : { type: 'string', required: true }, 

        status : { type: ALARMSTATUSDef, required: true }, 

        type : { type: ALARMTYPEDef, required: true }, 

        source : { type: ALARMSOURCEDef, required: true }, 

        detail : { type: 'string', required: true }, 

        resourceId : { type: 'string', required: true }, 

        vtnId : { type: 'string', required: true }, 

        vtnName : { type: 'string' }, 

        resolver : { type: 'string', required: true }, 

        resolveNote : { type: 'string' }, 

        reportingMethod : { type: 'string', required: true }, 

        solveTime : { type: 'Date', required: true }, 

        gUINotification : { type: GUINOTIFICATIONDef }, 

        emergencyPolicyIdArray : { type: 'string' }

    },
    toString:()=>{
        return 'Alarm';
    }
};



