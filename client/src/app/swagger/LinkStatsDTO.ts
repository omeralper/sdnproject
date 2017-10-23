//imports start LinkStatsDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {PortStat,PortStatDef} from "./PortStat";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LinkStatsDTO extends BaseDTO {
   
    /**
    * Bağlantı kayıp yüzdesidir. 0-100 arası değer.
    */
    loss?: number;
   
    /**
    * Gecikme değeri
    */
    delay?: number;
   
    /**
    * Seğirme değeri (Paket Gecikme Değişkenliği)
    */
    jitter?: number;
   
    /**
    * Kaynak Port detayları.
    */
    dstPortStats?: PortStat;
   
    /**
    * Bağlantı sinyal kalitesi yüzdesidir. 0-100 arası değer. (RadioLink gibi ortamlar için)
    */
    signalQuality?: number;
   
    /**
    * Kaynak Port detayları.
    */
    srcPortStats: PortStat;

}


export var LinkStatsDTODef:IModelDef = {
    meta: {
        className: 'LinkStatsDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        loss : { type: 'number' }, 

        delay : { type: 'number' }, 

        jitter : { type: 'number' }, 

        dstPortStats : { type: PortStatDef }, 

        signalQuality : { type: 'number' }, 

        srcPortStats : { type: PortStatDef, required: true }

    }),
    toString:()=>{
        return 'LinkStatsDTO';
    }
};



