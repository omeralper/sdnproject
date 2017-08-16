//imports start PopPushHeaderInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Girilen aksiyona göre başlık bilgisinde ekleme ve/veya çıkarma yapmak için kullanılır
*/
export interface PopPushHeaderInfo {
   
    /**
    * Eklenen başlık değeri
    */
    pushValue?: string;
   
    /**
    * Çıkarılan başlık değeri
    */
    popValue?: string;
   
    /**
    * Girilen vlan değerinin pakete push edilip edilmeyeceğine karar verir. Seçilmezse sadece kontrolcüde paket context'ine yazılır
    */
    pushToPacket?: boolean;

}


export var PopPushHeaderInfoDef:IModelDef = {
    meta: {
        className: 'PopPushHeaderInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        pushValue : { type: 'string' }, 

        popValue : { type: 'string' }, 

        pushToPacket : { type: 'boolean' }

    },
    toString:()=>{
        return 'PopPushHeaderInfo';
    }
};



