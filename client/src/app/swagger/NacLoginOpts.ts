//imports start NacLoginOpts

/*###NacLoginOpts*/


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Son kullanıcı giriş işlemi için gerekli veri yapısı.\&quot;
*/
export interface NacLoginOpts {
   
    /**
    * Kullanıcı Adı.
    */
    username: string;
   
    /**
    * Kullanıcı şifresi.
    */
    password: string;
   
    /**
    * Son kullanıcı hesabının hatırlanmasını kontrol eden boolean değer.
    */
    isRemember?: boolean;
   
    /**
    * Giriş işlemi sırasında sunucuya iletilmesi istenen ekstra verilerin yer aldığı veri yapısı. 'user_agent' ve 'user_ip' key'leri kullanılarak ilgili veriler geçilmektedir.
    */
    params?: { [key: string]: string; };

}


export var NacLoginOptsDef:IModelDef = {
    meta: {
        className: 'NacLoginOpts',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        username : { type: 'string', required: true }, 

        password : { type: 'string', required: true }, 

        isRemember : { type: 'boolean' }, 

        params : { type: 'Array' }

    },
    toString:()=>{
        return 'NacLoginOpts';
    }
};



