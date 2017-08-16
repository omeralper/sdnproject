//imports start LinkDTO

import {AlarmInfo,AlarmInfoDef} from "./AlarmInfo";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {CONNECTIONTYPE,CONNECTIONTYPEDef} from "./CONNECTIONTYPE";
import {LINKMEDIUM,LINKMEDIUMDef} from "./LINKMEDIUM";
import {LINKSTATUS,LINKSTATUSDef} from "./LINKSTATUS";
import {PathConstraintInfo,PathConstraintInfoDef} from "./PathConstraintInfo";
import {PortDetail,PortDetailDef} from "./PortDetail";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LinkDTO extends BaseDTO {
   
    /**
    * Switchteki yüksek öncelikli queueId değeri.
    */
    queueId?: number;
   
    /**
    * Bu bağlantının gecikme değerinin ölçülüp ölçülmeyeceğini gösteren değer.
    */
    measureDelay?: boolean;
   
    /**
    * Bağlantının bant genişliği değeri.
    */
    bandwidth?: number;
   
    /**
    * Alarmlar
    */
    alarms?: Array<AlarmInfo>;
   
    /**
    * Bağlantının bulunduğu topolojinin kimlik bilgisi
    */
    topologyId: string;
   
    /**
    * Bağlantının bant genişliği kullanım oranı.
    */
    bandwidthUtilization?: number;
   
    /**
    * Kaynak Port detayları.
    */
    srcPort: PortDetail;
   
    /**
    * Bağlantının veri iletimi için kullandığı ortam bilgisi.
    */
    medium?: LINKMEDIUM;
   
    /**
    * ??
    */
    linkWeight?: string;
   
    /**
    * Bağlantı tipi. Bağlantının hangi 2 tip cihaz arasında olduğunu belirtir.
    */
    connectionType?: CONNECTIONTYPE;
   
    /**
    * Constraint listesi.
    */
    constraints?: PathConstraintInfo;
   
    /**
    * Bu bağlantının topoloji'de her zaman yer alması gerektiği gösteren değer. Eğer bu bağlantı topolojiden kalkarsa sistemde bir problem var demektir.
    */
    required?: boolean;
   
    /**
    * Bağlantının güvenlik seviyesi.
    */
    securityLevel: number;
   
    /**
    * Link kayıp yüzdesidir. 0-100 arası değer.
    */
    loss?: number;
   
    /**
    * Veri çarpışma oranı
    */
    collision?: number;
   
    /**
    * Kaynak Port detayları.
    */
    destPort: PortDetail;
   
    /**
    * Gecikme değeri
    */
    delay?: number;
   
    /**
    * Seğirme değeri (Paket Gecikme Değişkenliği)
    */
    jitter?: number;
   
    /**
    * Bu bağlantının loop oluşturduğunu gösteren değer.
    */
    blocked?: boolean;
   
    /**
    * Bağlantı sinyal kalitesi yüzdesidir. 0-100 arası değer. (RadioLink gibi ortamlar için)
    */
    signalQuality?: number;
   
    /**
    * Bağlantının istenilen default renk değeri. Örn: red, blue, yellow, pink..
    */
    colorCode?: string;
   
    /**
    * Bu bağlantının WAN linki olup olmadığını gösteren değer.
    */
    isWanLink?: boolean;
   
    /**
    * Bağlantı sağlık durumu.
    */
    status: LINKSTATUS;

}


export var LinkDTODef:IModelDef = {
    meta: {
        className: 'LinkDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        queueId : { type: 'number' }, 

        measureDelay : { type: 'boolean' }, 

        bandwidth : { type: 'number' }, 

        alarms : { type: 'Array' }, 

        topologyId : { type: 'string', required: true }, 

        bandwidthUtilization : { type: 'number' }, 

        srcPort : { type: PortDetailDef, required: true }, 

        medium : { type: LINKMEDIUMDef }, 

        linkWeight : { type: 'string' }, 

        connectionType : { type: CONNECTIONTYPEDef }, 

        constraints : { type: PathConstraintInfoDef }, 

        required : { type: 'boolean' }, 

        securityLevel : { type: 'number', required: true }, 

        loss : { type: 'number' }, 

        collision : { type: 'number' }, 

        destPort : { type: PortDetailDef, required: true }, 

        delay : { type: 'number' }, 

        jitter : { type: 'number' }, 

        blocked : { type: 'boolean' }, 

        signalQuality : { type: 'number' }, 

        colorCode : { type: 'string' }, 

        isWanLink : { type: 'boolean' }, 

        status : { type: LINKSTATUSDef, required: true }

    }),
    toString:()=>{
        return 'LinkDTO';
    }
};



