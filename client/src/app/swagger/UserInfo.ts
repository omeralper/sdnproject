//imports start UserInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Kullanıcı verisinin bulunduğu veri yapısı
*/
export interface UserInfo {
   
    /**
    * Kullanıcı Adı.
    */
    userName: string;
   
    /**
    * Kullanıcının ismi.
    */
    name: string;
   
    /**
    * Kullanıcının soy ismi
    */
    surname: string;

}


export var UserInfoDef:IModelDef = {
    meta: {
        className: 'UserInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        userName : { type: 'string', required: true }, 

        name : { type: 'string', required: true }, 

        surname : { type: 'string', required: true }

    },
    toString:()=>{
        return 'UserInfo';
    }
};



