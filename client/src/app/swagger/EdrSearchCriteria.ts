//imports start EdrSearchCriteria

import {EDRSTATUS,EDRSTATUSDef} from "./EDRSTATUS";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* EDR araştırma kriterlerinin bulunduğu veri yapısıdır.
*/
export interface EdrSearchCriteria {
   
    /**
    * EDR sorgulama başlangıç tarihi.
    */
    timeStart?: string;
   
    /**
    * EDR sorgulama sonuç tarihi.
    */
    timeEnd?: string;
   
    /**
    * EDR da işaret edilen olayın durumu.
    */
    status?: EDRSTATUS;
   
    /**
    * Kullanıcı Adı.
    */
    username?: string;
   
    /**
    * Kaynak IP adresi.
    */
    sourceIP?: string;
   
    /**
    * Hedef IP adresi.
    */
    destinationIP?: string;
   
    /**
    * Kaynak MAC adresi.
    */
    sourceMAC?: string;
   
    /**
    * Hedef MAC adresi.
    */
    destinationMAC?: string;
   
    /**
    * Kaynak port.
    */
    sourcePort?: number;
   
    /**
    * Hedef port.
    */
    destinationPort?: number;
   
    /**
    * IP protokolü.
    */
    protocol?: string;
   
    /**
    * İstek kodu.
    */
    xid?: string;
   
    /**
    * Modül Adı.
    */
    module?: string;
   
    /**
    * Dönülecek edr sayısının sınırı.
    */
    limit?: number;
   
    /**
    * Bu alanda farklı edr türleri için bulunan key-value değerleri burada yeralıyor.
    */
    data?: string;

}


export var EdrSearchCriteriaDef:IModelDef = {
    meta: {
        className: 'EdrSearchCriteria',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        timeStart : { type: 'string' }, 

        timeEnd : { type: 'string' }, 

        status : { type: EDRSTATUSDef }, 

        username : { type: 'string' }, 

        sourceIP : { type: 'string' }, 

        destinationIP : { type: 'string' }, 

        sourceMAC : { type: 'string' }, 

        destinationMAC : { type: 'string' }, 

        sourcePort : { type: 'number' }, 

        destinationPort : { type: 'number' }, 

        protocol : { type: 'string' }, 

        xid : { type: 'string' }, 

        module : { type: 'string' }, 

        limit : { type: 'number' }, 

        data : { type: 'string' }

    },
    toString:()=>{
        return 'EdrSearchCriteria';
    }
};



