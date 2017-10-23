//imports start SetPwdRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SetPwdRequest extends GenericRequest {
   
    /**
    * Kullanıcının yeni şifresi. (!) DİKKAT: Şifrenin doğru yazıldığının kontrolünü UI katmanı sağlamalıdır.
    */
    newPassword: string;
   
    /**
    * Kullanıcı ID değeri.
    */
    id: string;

}


export var SetPwdRequestDef:IModelDef = {
    meta: {
        className: 'SetPwdRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        newPassword : { type: 'string', required: true }, 

        id : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'SetPwdRequest';
    }
};



