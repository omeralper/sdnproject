//imports start FlowDeleteOptions



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Akışların silinmesinde kullanılacak parametrelerin tanımlanmasını sağlayan veri modelidir.
*/
export interface FlowDeleteOptions {
   
    /**
    * Silinmek istenen modelin ID değeri.
    */
    id: string;
   
    /**
    * Akışlarda silme yapılacak anahtarlayıcıya ait ID değeri.
    */
    deviceId: string;
   
    /**
    * Silinen modelin verilerinin cevapta dönülüp dönülmemesini kontrol eden değer.'true' ise silinen model cevapta dönülür. Varsılan olarak 'false'.
    */
    isReturnModel: boolean;

}


export var FlowDeleteOptionsDef:IModelDef = {
    meta: {
        className: 'FlowDeleteOptions',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        id : { type: 'string', required: true }, 

        deviceId : { type: 'string', required: true }, 

        isReturnModel : { type: 'boolean', required: true }

    },
    toString:()=>{
        return 'FlowDeleteOptions';
    }
};



