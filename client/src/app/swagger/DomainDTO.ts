//imports start DomainDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {DOMAINSTATUS,DOMAINSTATUSDef} from "./DOMAINSTATUS";
import {LocationInfo,LocationInfoDef} from "./LocationInfo";
import {PortDetail,PortDetailDef} from "./PortDetail";
import {SUPERTOPOLOGYTYPE,SUPERTOPOLOGYTYPEDef} from "./SUPERTOPOLOGYTYPE";
import {WanAlarmInfoDTO,WanAlarmInfoDTODef} from "./WanAlarmInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DomainDTO extends BaseDTO {
   
    /**
    * Cihazın güvenlik seviyesi.
    */
    securityLevel?: number;
   
    /**
    * Cihazın aktif olduğu zaman.
    */
    activeSince?: Date;
   
    /**
    * Cihazın en son ağda görüldüğü zaman.
    */
    lastSeen?: Date;
   
    /**
    * ??
    */
    blocked?: boolean;
   
    /**
    * Cihazın bağlı bulunduğu port bilgisi.
    */
    port?: PortDetail;
   
    /**
    * Cihazın alarmlarının bilgisi.
    */
    alarms?: WanAlarmInfoDTO;
   
    /**
    * Cihaz adı.
    */
    name?: string;
   
    /**
    * Anahtarlayıcının lokasyon bilgisi bu alanda tutlacaktır.
    */
    location?: LocationInfo;
   
    /**
    * Modelin Topolojide gösterilmesi istenen renk kodu
    */
    colorCode?: string;
   
    /**
    * Cihaz tipi.
    */
    type?: SUPERTOPOLOGYTYPE;
   
    /**
    * Cihaz sağlık durumu.
    */
    status?: DOMAINSTATUS;

}


export var DomainDTODef:IModelDef = {
    meta: {
        className: 'DomainDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        securityLevel : { type: 'number' }, 

        activeSince : { type: 'Date' }, 

        lastSeen : { type: 'Date' }, 

        blocked : { type: 'boolean' }, 

        port : { type: PortDetailDef }, 

        alarms : { type: WanAlarmInfoDTODef }, 

        name : { type: 'string' }, 

        location : { type: LocationInfoDef }, 

        colorCode : { type: 'string' }, 

        type : { type: SUPERTOPOLOGYTYPEDef }, 

        status : { type: DOMAINSTATUSDef }

    }),
    toString:()=>{
        return 'DomainDTO';
    }
};



