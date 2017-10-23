//imports start ChangePwdRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ChangePwdRequest extends GenericRequest {
   
    /**
    * Kullanıcının yeni şifresi. (!) DİKKAT: Şifrenin doğru yazıldığının kontrolünü UI katmanı sağlamalıdır.
    */
    newPassword: string;
   
    /**
    * Kullanıcının mevcut şifresi.
    */
    oldPassword: string;
   
    /**
    * Kullanıcı Adı.
    */
    username: string;

}


export var ChangePwdRequestDef:IModelDef = {
    meta: {
        className: 'ChangePwdRequest',
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
        return 'ChangePwdRequest';
    }
};



