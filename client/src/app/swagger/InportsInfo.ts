//imports start InportsInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Eşleştirmede kullanılacak in port bilgisini tutar
*/
export interface InportsInfo {
   
    /**
    * Paketin geldiği ağ elemanı bilgisini tutar
    */
    deviceId?: string;
   
    /**
    * Paketin gelebileceği port bilgilerini tutar
    */
    inports?: Array<string>;

}


export var InportsInfoDef:IModelDef = {
    meta: {
        className: 'InportsInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        deviceId : { type: 'string' }, 

        inports : { type: 'Array' }

    },
    toString:()=>{
        return 'InportsInfo';
    }
};



