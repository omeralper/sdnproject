//imports start DownSampling

import {TsdbAggregator,TsdbAggregatorDef} from "./TsdbAggregator";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Bir periyoda saçılmış çok sayıda veri noktasını birleştirmek
*/
export interface DownSampling {
   period: number;
   aggregator: TsdbAggregator;

}


export var DownSamplingDef:IModelDef = {
    meta: {
        className: 'DownSampling',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        period : { type: 'number', required: true }, 

        aggregator : { type: TsdbAggregatorDef, required: true }

    },
    toString:()=>{
        return 'DownSampling';
    }
};



