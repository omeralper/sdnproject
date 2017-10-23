//imports start NetworkCounter



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Ağ istatistiklerinin tutan temel veri yapısı.
*/
export interface NetworkCounter {
   
    /**
    * Gönderim sayıları.
    */
    sent: number;
   
    /**
    * Alış sayıları.
    */
    received: number;

}


export var NetworkCounterDef:IModelDef = {
    meta: {
        className: 'NetworkCounter',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        sent : { type: 'number', required: true }, 

        received : { type: 'number', required: true }

    },
    toString:()=>{
        return 'NetworkCounter';
    }
};



