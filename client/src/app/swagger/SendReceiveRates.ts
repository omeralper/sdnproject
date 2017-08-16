//imports start SendReceiveRates



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Alma/gönderme trafik hızı temel veri yapısı.
*/
export interface SendReceiveRates {
   
    /**
    * gönderme debisi (bytes/sec).
    */
    sent: number;
   
    /**
    * alma debisi (bytes/sec).
    */
    received: number;

}


export var SendReceiveRatesDef:IModelDef = {
    meta: {
        className: 'SendReceiveRates',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        sent : { type: 'number', required: true }, 

        received : { type: 'number', required: true }

    },
    toString:()=>{
        return 'SendReceiveRates';
    }
};



