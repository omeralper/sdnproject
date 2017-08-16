//imports start ErrorInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* API cevaplarında hata oluşması durumunda, hata detayları bu veri yapısı kullanılarak istemcilere iletilecektir.
*/
export interface ErrorInfo {
   
    /**
    * Hata kodu. İstek yapılan fonksiyona göre farklılık gösterecektir.
    */
    code: number;
   
    /**
    * Hata ile ilgili kısa açıklama.
    */
    message?: string;
   
    /**
    * Hata ile ilgili verilerin eklenebileceği genel alan.
    */
    extras?: any;

}


export var ErrorInfoDef:IModelDef = {
    meta: {
        className: 'ErrorInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        code : { type: 'number', required: true }, 

        message : { type: 'string' }, 

        extras : { type: 'any' }

    },
    toString:()=>{
        return 'ErrorInfo';
    }
};



