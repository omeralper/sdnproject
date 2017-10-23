//imports start PortDetail

import {AddressInfo,AddressInfoDef} from "./AddressInfo";
import {AlarmInfo,AlarmInfoDef} from "./AlarmInfo";
import {LINKTYPE,LINKTYPEDef} from "./LINKTYPE";
import {PORTCONFIG,PORTCONFIGDef} from "./PORTCONFIG";
import {PORTSTATE,PORTSTATEDef} from "./PORTSTATE";
import {StatsDetail,StatsDetailDef} from "./StatsDetail";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Tek bir portun detaylarının tutulduğu veri yapısı.
*/
export interface PortDetail {
   
    /**
    * Port ID
    */
    id?: string;
   
    /**
    * Port numarası.
    */
    number: number;
   
    /**
    * Port durum bilgisini içeren liste.
    */
    states?: Array<PORTSTATE>;
   
    /**
    * Port yapılandırma bilgisini içeren liste.
    */
    configs?: Array<PORTCONFIG>;
   
    /**
    * Port adresleri.
    */
    address: AddressInfo;
   
    /**
    * Port istatistikleri.
    */
    stats?: StatsDetail;
   
    /**
    * Port hızı.
    */
    speed?: number;
   
    /**
    * Ortalama port hızı.
    */
    averageSpeed?: number;
   
    /**
    * Port adı
    */
    name?: string;
   
    /**
    * Ait olunana anahtarlayıcılar. (fiziksel ve sanal)
    */
    switches?: Array<string>;
   
    /**
    * Alarmlar
    */
    alarms?: Array<AlarmInfo>;
   
    /**
    * Link tipi.
    */
    linkType?: LINKTYPE;

}


export var PortDetailDef:IModelDef = {
    meta: {
        className: 'PortDetail',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        id : { type: 'string' }, 

        number : { type: 'number', required: true }, 

        states : { type: 'Array' }, 

        configs : { type: 'Array' }, 

        address : { type: AddressInfoDef, required: true }, 

        stats : { type: StatsDetailDef }, 

        speed : { type: 'number' }, 

        averageSpeed : { type: 'number' }, 

        name : { type: 'string' }, 

        switches : { type: 'Array' }, 

        alarms : { type: 'Array' }, 

        linkType : { type: LINKTYPEDef }

    },
    toString:()=>{
        return 'PortDetail';
    }
};



