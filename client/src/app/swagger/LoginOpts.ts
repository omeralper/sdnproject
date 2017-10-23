//imports start LoginOpts

/*###LoginOpts*/


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Giriş işlemi için gerekli veri yapısı.\&quot;
*/
export interface LoginOpts {
   
    /**
    * Kullanıcı Adı.
    */
    username: string;
   
    /**
    * Kullanıcı şifresi.
    */
    password: string;
   
    /**
    * Kullanıcı hesabının hatırlanmasını kontrol eden boolean değer.
    */
    isRemember?: boolean;
   
    /**
    * Giriş işlemi sırasında sunucuya iletilmesi istenen ekstra verilerin yer aldığı veri yapısı.  'user_agent' ve 'user_ip' key'leri kullanılarak ilgili veriler geçilmektedir.
    */
    params?: { [key: string]: string; };

}


export var LoginOptsDef:IModelDef = {
    meta: {
        className: 'LoginOpts',
        
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
        return 'LoginOpts';
    }
};



