//imports start SecurityToken



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* API iletişimi sırasında iletilen verilerin güvenliğinin sağlanması ve fonksiyonlara yapılan isteklerin kontrol edilmesi amacıyla tüm istek-cevap verilerinde eklenecek veri yapısıdır.
*/
export interface SecurityToken {
   
    /**
    * Her istek için yeniden üretilecek bir değer. Bu değer her isteğin tek seferlik olmasını sağlayacak ve sistem günlüklerine kayıt edilerek isteklerin uçtan uca takibini kolaylaştıracaktır. Timestamp ve Gizli bir Anahtar kullanılarak üretilecektir.
    */
    requestId: string;
   
    /**
    * İstek ve cevabın oluştuğu tarih-saat bilgisi [RFC3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html#anchor14)’da tanımlanmış formatta bu alanda saklanacaktır.
    */
    timestamp: Date;

}


export var SecurityTokenDef:IModelDef = {
    meta: {
        className: 'SecurityToken',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        requestId : { type: 'string', required: true }, 

        timestamp : { type: 'Date', required: true }

    },
    toString:()=>{
        return 'SecurityToken';
    }
};



