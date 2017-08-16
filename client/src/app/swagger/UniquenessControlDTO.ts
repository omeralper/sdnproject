//imports start UniquenessControlDTO



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Temel liste dönülen veri transfer model tanımıdır. Tüm liste fonksiyonlarından dönülecek veri transfer modelleri bu model’i temel alarak tanımlanacaktır.
*/
export interface UniquenessControlDTO {
   
    /**
    * Veritabanından sorgulanacak alanın/kolonun adı
    */
    fieldName: string;
   
    /**
    * Veritabanından sorgulanacak değer bilgisi
    */
    value: string;

}


export var UniquenessControlDTODef:IModelDef = {
    meta: {
        className: 'UniquenessControlDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        fieldName : { type: 'string', required: true }, 

        value : { type: 'string', required: true }

    },
    toString:()=>{
        return 'UniquenessControlDTO';
    }
};



