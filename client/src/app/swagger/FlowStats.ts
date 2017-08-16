//imports start FlowStats



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Tek bir portun istatistiklerinin tutulduğu veri yapısı.
*/
export interface FlowStats {
   life: number;
   packets: number;
   bytes: number;
   rate: number;
   tstamp: number;

}


export var FlowStatsDef:IModelDef = {
    meta: {
        className: 'FlowStats',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        life : { type: 'number', required: true }, 

        packets : { type: 'number', required: true }, 

        bytes : { type: 'number', required: true }, 

        rate : { type: 'number', required: true }, 

        tstamp : { type: 'number', required: true }

    },
    toString:()=>{
        return 'FlowStats';
    }
};



