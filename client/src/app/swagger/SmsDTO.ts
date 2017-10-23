//imports start SmsDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {SMSSOURCE,SMSSOURCEDef} from "./SMSSOURCE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SmsDTO extends BaseDTO {
   
    /**
    * Sms apisini kulanmak için kullanılan password
    */
    password?: string;
   
    /**
    * Smsi atan uygulamanın adı
    */
    sender?: string;
   
    /**
    * Smsin kime gönderileceği
    */
    to?: string;
   
    /**
    * Smsi atan uygulamanın adı
    */
    source?: SMSSOURCE;
   
    /**
    * Smsin içeriği
    */
    message?: string;
   
    /**
    * Sms apisini kulanmak için kullanılan username
    */
    username?: string;

}


export var SmsDTODef:IModelDef = {
    meta: {
        className: 'SmsDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        password : { type: 'string' }, 

        sender : { type: 'string' }, 

        to : { type: 'string' }, 

        source : { type: SMSSOURCEDef }, 

        message : { type: 'string' }, 

        username : { type: 'string' }

    }),
    toString:()=>{
        return 'SmsDTO';
    }
};



