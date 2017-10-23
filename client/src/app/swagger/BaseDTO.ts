//imports start BaseDTO



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Temel veri transfer model tanımıdır. Tüm veri transfer modelleri bu model’i temel alarak tanımlanacaktır.
*/
export interface BaseDTO {
   
    /**
    * Veri tekil anahtarı(primary key) değeridir.
    */
    id?: string;
   
    /**
    * Veri yapısının sürüm değeri. Bilgi amaçlı olup hardcoded bir değer olacaktır.
    */
    version: number;
   
    /**
    * Verinin revizyon numarası. Veride her değişiklik olduğunda 1 arttırılacaktır.
    */
    revision: number;
   
    /**
    * [RFC3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14)’da tanımlanmış formatta tarih-saat verisi. Veride her değişiklik olduğunda güncellenecektir.
    */
    timestamp: Date;

}


export var BaseDTODef:IModelDef = {
    meta: {
        className: 'BaseDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        id : { type: 'string' }, 

        version : { type: 'number', required: true }, 

        revision : { type: 'number', required: true }, 

        timestamp : { type: 'Date', required: true }

    },
    toString:()=>{
        return 'BaseDTO';
    }
};



