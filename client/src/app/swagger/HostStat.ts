//imports start HostStat



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Hostların istatistiklerinin tutulduğu veri yapısıdır.
*/
export interface HostStat {
   
    /**
    * Source MAC Address
    */
    mac?: string;
   
    /**
    * Gönderilen Byte Sayısı
    */
    sendByteCount: number;
   
    /**
    * Alınan paket sayısı
    */
    receiveByteCount: number;

}


export var HostStatDef:IModelDef = {
    meta: {
        className: 'HostStat',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        mac : { type: 'string' }, 

        sendByteCount : { type: 'number', required: true }, 

        receiveByteCount : { type: 'number', required: true }

    },
    toString:()=>{
        return 'HostStat';
    }
};



