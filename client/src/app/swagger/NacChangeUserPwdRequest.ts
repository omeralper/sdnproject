//imports start NacChangeUserPwdRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacChangeUserPwdRequest extends GenericRequest {
   
    /**
    * Son kullanıcının yeni şifresi. (!) DİKKAT: Şifrenin doğru yazıldığının kontrolünü UI katmanı sağlamalıdır.
    */
    newPassword: string;
   
    /**
    * Son kullanıcının mevcut şifresi.
    */
    oldPassword: string;
   
    /**
    * Kullanıcı Adı.
    */
    username: string;

}


export var NacChangeUserPwdRequestDef:IModelDef = {
    meta: {
        className: 'NacChangeUserPwdRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        newPassword : { type: 'string', required: true }, 

        oldPassword : { type: 'string', required: true }, 

        username : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'NacChangeUserPwdRequest';
    }
};



