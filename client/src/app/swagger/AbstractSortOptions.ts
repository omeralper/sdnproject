//imports start AbstractSortOptions



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* API fonksiyonlarında veri sıralamasının nasıl yapılacağının iletilmesini sağlayan soyut veri modelidir.
*/
export interface AbstractSortOptions {
   
    /**
    * Veri modelinde sıralama yapılmak istenen alanın adı.
    */
    fieldName: string;
   
    /**
    * Değerinin anlamına göre; - 'true':  Küçükten-Büyüğe, - 'false': Büyükten-Küçüğe sıralama yaptıran parametre.
    */
    isAscend?: boolean;

}


export var AbstractSortOptionsDef:IModelDef = {
    meta: {
        className: 'AbstractSortOptions',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        fieldName : { type: 'string', required: true }, 

        isAscend : { type: 'boolean' }

    },
    toString:()=>{
        return 'AbstractSortOptions';
    }
};



