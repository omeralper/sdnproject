//imports start CommonHeaderCriteriaInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Eşleştirmede kullanılacak genel kaynak/hedef başlık değerlerini tutar
*/
export interface CommonHeaderCriteriaInfo {
   
    /**
    * Kaynak değer listesi
    */
    src?: Array<string>;
   
    /**
    * Dedef değer listesi
    */
    dest?: Array<string>;

}


export var CommonHeaderCriteriaInfoDef:IModelDef = {
    meta: {
        className: 'CommonHeaderCriteriaInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        src : { type: 'Array' }, 

        dest : { type: 'Array' }

    },
    toString:()=>{
        return 'CommonHeaderCriteriaInfo';
    }
};



