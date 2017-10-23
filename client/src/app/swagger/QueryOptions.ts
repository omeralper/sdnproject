//imports start QueryOptions

import {QUERYOP,QUERYOPDef} from "./QUERYOP";
//import {QueryOptions,QueryOptionsDef} from "./QueryOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* API fonksiyonlarında arama yapılması için kullanılacak kıstasların tanımlanmasını sağlayan soyut veri modelidir.
*/
export interface QueryOptions {
   operator: QUERYOP;
   
    /**
    * Arama yapılacak veri modeli alanının adı.
    */
    fieldName?: string;
   
    /**
    * Aranacak değer.
    */
    fieldValue?: string;
   leftQuery?: QueryOptions;
   rightQuery?: QueryOptions;

}


export var QueryOptionsDef:IModelDef = {
    meta: {
        className: 'QueryOptions',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        operator : { type: QUERYOPDef, required: true }, 

        fieldName : { type: 'string' }, 

        fieldValue : { type: 'string' }, 

        leftQuery : { type: QueryOptionsDef }, 

        rightQuery : { type: QueryOptionsDef }

    },
    toString:()=>{
        return 'QueryOptions';
    }
};



