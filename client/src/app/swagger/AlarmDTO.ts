//imports start AlarmDTO

import {ALARMRESOURCE,ALARMRESOURCEDef} from "./ALARMRESOURCE";
import {ALARMSOURCE,ALARMSOURCEDef} from "./ALARMSOURCE";
import {ALARMSTATUS,ALARMSTATUSDef} from "./ALARMSTATUS";
import {ALARMTYPE,ALARMTYPEDef} from "./ALARMTYPE";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {GUINOTIFICATION,GUINOTIFICATIONDef} from "./GUINOTIFICATION";
import {SEVERITY,SEVERITYDef} from "./SEVERITY";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AlarmDTO extends BaseDTO {
   
    /**
    * Alarm önem derecesi
    */
    severity?: SEVERITY;
   
    /**
    * Alarmı atan uygulamanın üzerinde çalıştığı uygulama sağlayıcısının numarası
    */
    sourceInstance?: string;
   
    /**
    * Alarmın kimin tarafından çözüldüğü bilgisi.
    */
    resolver?: string;
   
    /**
    * Alarmın ilgili olduğu elemanın kimlik bilgisi
    */
    resourceId?: string;
   
    /**
    * #/definitions/REPORTING_METHOD
    */
    reportingMethod?: string;
   
    /**
    * Alarma sebep olan kaynak
    */
    resource?: ALARMRESOURCE;
   
    /**
    * İhityaç duyulan acil durum politikası id'leri
    */
    emergencyPolicyIdArray?: Array<number>;
   
    /**
    * Alarmın açıklaması
    */
    description?: string;
   
    /**
    * Alarmı atan uygulama adı
    */
    source?: ALARMSOURCE;
   
    /**
    * Alarm tipi (Event ya da Alarm)
    */
    type?: ALARMTYPE;
   
    /**
    * Alarmın UI tarafından gösterilirliği
    */
    guiNotification?: GUINOTIFICATION;
   
    /**
    * Alarm durumu
    */
    alarmStatus?: ALARMSTATUS;
   
    /**
    * Alarmı atan uygulamanın üzerinde çalıştığı makinenin adı ya da IP adresi
    */
    sourceHost?: string;
   
    /**
    * Alarmın adı
    */
    name?: string;
   
    /**
    * Alarmın çözüldüğü zaman
    */
    solveTime?: Date;
   
    /**
    * Alarm için yapılacak aksiyon
    */
    correctionAction?: string;
   
    /**
    * Alarmın / Eventin oluştuğu zaman
    */
    time?: Date;
   
    /**
    * Alarmın detayı
    */
    detail?: string;
   
    /**
    * Alarmı çözen kişinin notu.
    */
    resolveNote?: string;
   
    /**
    * Alarmın ait olduğu sanal ağın id bilgisi
    */
    vtnId?: string;
   
    /**
    * Alarmın ait olduğu sanal ağın isim bilgisi
    */
    vtnName?: string;

}


export var AlarmDTODef:IModelDef = {
    meta: {
        className: 'AlarmDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        severity : { type: SEVERITYDef }, 

        sourceInstance : { type: 'string' }, 

        resolver : { type: 'string' }, 

        resourceId : { type: 'string' }, 

        reportingMethod : { type: 'string' }, 

        resource : { type: ALARMRESOURCEDef }, 

        emergencyPolicyIdArray : { type: 'Array' }, 

        description : { type: 'string' }, 

        source : { type: ALARMSOURCEDef }, 

        type : { type: ALARMTYPEDef }, 

        guiNotification : { type: GUINOTIFICATIONDef }, 

        alarmStatus : { type: ALARMSTATUSDef }, 

        sourceHost : { type: 'string' }, 

        name : { type: 'string' }, 

        solveTime : { type: 'Date' }, 

        correctionAction : { type: 'string' }, 

        time : { type: 'Date' }, 

        detail : { type: 'string' }, 

        resolveNote : { type: 'string' }, 

        vtnId : { type: 'string' }, 

        vtnName : { type: 'string' }

    }),
    toString:()=>{
        return 'AlarmDTO';
    }
};



