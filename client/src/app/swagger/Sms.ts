//imports start Sms

import {SMSSOURCE,SMSSOURCEDef} from "./SMSSOURCE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Uygulamalar tarafından detaysız sms objesi
*/
export interface Sms {
   
    /**
    * Smsin kime gönderileceği
    */
    to: string;
   
    /**
    * Smsi atan uygulamanın adı
    */
    source: SMSSOURCE;
   
    /**
    * Smsin içeriği
    */
    message: string;
   
    /**
    * Smsi atan uygulamanın adı
    */
    sender: string;
   
    /**
    * Sms apisini kulanmak için kullanılan username
    */
    username: string;
   
    /**
    * Sms apisini kulanmak için kullanılan password
    */
    password: string;

}


export var SmsDef:IModelDef = {
    meta: {
        className: 'Sms',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        to : { type: 'string', required: true }, 

        source : { type: SMSSOURCEDef, required: true }, 

        message : { type: 'string', required: true }, 

        sender : { type: 'string', required: true }, 

        username : { type: 'string', required: true }, 

        password : { type: 'string', required: true }

    },
    toString:()=>{
        return 'Sms';
    }
};



