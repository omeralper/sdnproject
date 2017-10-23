//imports start AbstractDeleteOptions



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Tüm Silme fonksiyonlarında kullanılacak kıstasların tanımlanmasını sağlayan soyut veri modelidir.
*/
export interface AbstractDeleteOptions {
   
    /**
    * Silinmek istenen modelin ID değeri.
    */
    id: string;
   
    /**
    * Silinen modelin verilerinin cevapta dönülüp dönülmemesini kontrol eden değer.'true' ise silinen model cevapta dönülür. Varsılan olarak 'false'.
    */
    isReturnModel: boolean;

}


export var AbstractDeleteOptionsDef:IModelDef = {
    meta: {
        className: 'AbstractDeleteOptions',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        id : { type: 'string', required: true }, 

        isReturnModel : { type: 'boolean', required: true }

    },
    toString:()=>{
        return 'AbstractDeleteOptions';
    }
};



