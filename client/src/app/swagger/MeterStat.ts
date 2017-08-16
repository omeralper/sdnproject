//imports start MeterStat



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* OF meter istatistiklerinin tutulduğu veri yapısı.
*/
export interface MeterStat {
   
    /**
    * OF meter yaşı (saniye).
    */
    life: number;
   
    /**
    * OF meter geçen paket sayısı.
    */
    packets: number;
   
    /**
    * OF meter geçen byte sayısı.
    */
    bytes: number;

}


export var MeterStatDef:IModelDef = {
    meta: {
        className: 'MeterStat',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        life : { type: 'number', required: true }, 

        packets : { type: 'number', required: true }, 

        bytes : { type: 'number', required: true }

    },
    toString:()=>{
        return 'MeterStat';
    }
};



