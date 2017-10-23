//imports start BandwidthInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Bant genişliği kullanım istatistiklerinin tutulduğu veri yapısı. Belli aralıklarla bu verilerin güncellendiği varsayılmaktadır.
*/
export interface BandwidthInfo {
   
    /**
    * Mevcut bant genişliği kullanım değeri.
    */
    current: number;
   
    /**
    * Minimum bant genişliği kullanım değeri. Bu değer belli aralıklarda anlamlı veriler üretebilecektir.
    */
    min: number;
   
    /**
    * Maksimum bant genişliği kullanım değeri.
    */
    max: number;

}


export var BandwidthInfoDef:IModelDef = {
    meta: {
        className: 'BandwidthInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        current : { type: 'number', required: true }, 

        min : { type: 'number', required: true }, 

        max : { type: 'number', required: true }

    },
    toString:()=>{
        return 'BandwidthInfo';
    }
};



