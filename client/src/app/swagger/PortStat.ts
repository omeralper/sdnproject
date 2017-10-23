//imports start PortStat

import {StatsDetail,StatsDetailDef} from "./StatsDetail";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Tek bir portun istatistiklerinin tutulduğu veri yapısı.
*/
export interface PortStat {
   
    /**
    * Port ID
    */
    id?: string;
   
    /**
    * Port numarası.
    */
    number: number;
   
    /**
    * Port istatistikleri.
    */
    stats: StatsDetail;

}


export var PortStatDef:IModelDef = {
    meta: {
        className: 'PortStat',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        id : { type: 'string' }, 

        number : { type: 'number', required: true }, 

        stats : { type: StatsDetailDef, required: true }

    },
    toString:()=>{
        return 'PortStat';
    }
};



