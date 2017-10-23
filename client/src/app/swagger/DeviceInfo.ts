//imports start DeviceInfo

import {DEVICETYPE,DEVICETYPEDef} from "./DEVICETYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Cihaz detaylarının tutulduğu veri yapısı.
*/
export interface DeviceInfo {
   
    /**
    * Üretici bilgisi.
    */
    vendor: string;
   
    /**
    * Model bilgisi.
    */
    model: string;
   
    /**
    * Cihaz Tipi.
    */
    type: DEVICETYPE;
   
    /**
    * Cihazın işletim sistemi sürümü.
    */
    swVersion?: string;

}


export var DeviceInfoDef:IModelDef = {
    meta: {
        className: 'DeviceInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        vendor : { type: 'string', required: true }, 

        model : { type: 'string', required: true }, 

        type : { type: DEVICETYPEDef, required: true }, 

        swVersion : { type: 'string' }

    },
    toString:()=>{
        return 'DeviceInfo';
    }
};



