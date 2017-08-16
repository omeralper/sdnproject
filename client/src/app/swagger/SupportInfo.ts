//imports start SupportInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Cihazlar tarafından desteklenen protokollerin belirtildiği veri yapısı.
*/
export interface SupportInfo {
   
    /**
    * Desteklenen OpenFlow sürümü.
    */
    openFlow?: string;
   
    /**
    * Desteklenen netFlow sürümü.
    */
    netFlow?: string;
   
    /**
    * Desteklenen sFlow sürümü.
    */
    sFlow?: string;
   
    /**
    * Desteklenen jFlow(Juniper) sürümü.
    */
    jFlow?: string;
   
    /**
    * Desteklenen netStream(HP/Huawei) sürümü.
    */
    netStream?: string;
   
    /**
    * Desteklenen RFlow(Ericsson) sürümü.
    */
    rFlow?: string;
   
    /**
    * Desteklenen CFlowd(Alcatel-Lucent) sürümü.
    */
    cFlow?: string;

}


export var SupportInfoDef:IModelDef = {
    meta: {
        className: 'SupportInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        openFlow : { type: 'string' }, 

        netFlow : { type: 'string' }, 

        sFlow : { type: 'string' }, 

        jFlow : { type: 'string' }, 

        netStream : { type: 'string' }, 

        rFlow : { type: 'string' }, 

        cFlow : { type: 'string' }

    },
    toString:()=>{
        return 'SupportInfo';
    }
};



