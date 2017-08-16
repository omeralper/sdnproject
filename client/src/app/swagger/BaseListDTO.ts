//imports start BaseListDTO

import {SortOptions,SortOptionsDef} from "./SortOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Temel liste dönülen veri transfer model tanımıdır. Tüm liste fonksiyonlarından dönülecek veri transfer modelleri bu model’i temel alarak tanımlanacaktır.
*/
export interface BaseListDTO {
   
    /**
    * Listelenmekte olan verilerin mevcut sayfa numarasıdır.'0' değeri ilk sayfayı belirtir.
    */
    currentPageNumber: number;
   
    /**
    * Sayfalama için bir sayfada kaç adet öğe olduğunu belirten değer. '0' olması durumunda sayfalama işlemi yapılmamakta ve tüm veriler listelenmektedir.
    */
    currentPageSize: number;
   
    /**
    * Sistemde yer alan tüm verilere göre toplam sayfa sayısını belirtir.
    */
    totalPages: number;
   
    /**
    * Sistemde yer alan tüm verilerin sayısını belirtir.
    */
    totalItems: number;
   
    /**
    * İstek sırasında belirtilen sıralama ayarları bu alanda geri dönülür.
    */
    sortOptions: SortOptions;

}


export var BaseListDTODef:IModelDef = {
    meta: {
        className: 'BaseListDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        currentPageNumber : { type: 'number', required: true }, 

        currentPageSize : { type: 'number', required: true }, 

        totalPages : { type: 'number', required: true }, 

        totalItems : { type: 'number', required: true }, 

        sortOptions : { type: SortOptionsDef, required: true }

    },
    toString:()=>{
        return 'BaseListDTO';
    }
};



