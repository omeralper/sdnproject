//imports start StatsDetail

import {NetworkCounter,NetworkCounterDef} from "./NetworkCounter";
import {SendReceiveRates,SendReceiveRatesDef} from "./SendReceiveRates";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* İstatistik detaylarının tutulduğu veri yapısı.
*/
export interface StatsDetail {
   
    /**
    * Paket istatistikleri
    */
    packets: NetworkCounter;
   
    /**
    * Hatalı Paket istatistikleri
    */
    packetErrors: NetworkCounter;
   
    /**
    * Drop Paket istatistikleri
    */
    packetDrops: NetworkCounter;
   
    /**
    * Byte istatistikleri
    */
    bytes: NetworkCounter;
   
    /**
    * Güncel alma/gönderme debisi (bytes/sec)
    */
    rates: SendReceiveRates;
   
    /**
    * Çakışma sayıları
    */
    collisions: number;

}


export var StatsDetailDef:IModelDef = {
    meta: {
        className: 'StatsDetail',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        packets : { type: NetworkCounterDef, required: true }, 

        packetErrors : { type: NetworkCounterDef, required: true }, 

        packetDrops : { type: NetworkCounterDef, required: true }, 

        bytes : { type: NetworkCounterDef, required: true }, 

        rates : { type: SendReceiveRatesDef, required: true }, 

        collisions : { type: 'number', required: true }

    },
    toString:()=>{
        return 'StatsDetail';
    }
};



