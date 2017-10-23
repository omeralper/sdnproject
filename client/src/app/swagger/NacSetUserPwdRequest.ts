//imports start NacSetUserPwdRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacSetUserPwdRequest extends GenericRequest {
   
    /**
    * Son kullanıcının yeni şifresi. (!) DİKKAT: Şifrenin doğru yazıldığının kontrolünü UI katmanı sağlamalıdır.
    */
    newPassword: string;
   
    /**
    * Kullanıcı ID değeri.
    */
    id: string;

}


export var NacSetUserPwdRequestDef:IModelDef = {
    meta: {
        className: 'NacSetUserPwdRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        newPassword : { type: 'string', required: true }, 

        id : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'NacSetUserPwdRequest';
    }
};



