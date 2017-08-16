//imports start AbstractListOptions

import {SortOptions,SortOptionsDef} from "./SortOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Tüm listeleme fonksiyonlarında kullanılacak kıstasların tanımlanmasını sağlayan soyut veri modelidir.
*/
export interface AbstractListOptions {
   
    /**
    * Sayfalama için başlangıç sayfa değeri.'0' değeri ilk sayfayı belirtir.
    */
    startPage: number;
   
    /**
    * Sayfalama için bir sayfada kaç adet öğe olacağını tanımlayan değer. '0' verilmesi durumunda sayfalama işlemi yapılmayacak ve tüm veriler listelenecektir.
    */
    pageSize?: number;
   sortOptions?: SortOptions;
   
    /**
    * Veri transfer modelindeki verilerden sadece bu listede belirtilen alanlar dönülecektir. 'null' olması durumunda tüm alanlar dönülecektir.
    */
    fields?: Array<string>;

}


export var AbstractListOptionsDef:IModelDef = {
    meta: {
        className: 'AbstractListOptions',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        startPage : { type: 'number', required: true }, 

        pageSize : { type: 'number' }, 

        sortOptions : { type: SortOptionsDef }, 

        fields : { type: 'Array' }

    },
    toString:()=>{
        return 'AbstractListOptions';
    }
};



