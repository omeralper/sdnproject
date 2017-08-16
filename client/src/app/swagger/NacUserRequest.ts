//imports start NacUserRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NacUserDTO,NacUserDTODef} from "./NacUserDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserRequest extends GenericRequest {
   data: NacUserDTO;
   
    /**
    * Kullanıcı hesabı oluşturulduğunda, kullanıcı adı ve şifrenin e-posta ile kullanıcıya iletilmesini sağlayan ayar.
    */
    isSendPwdEmail?: boolean;

}


export var NacUserRequestDef:IModelDef = {
    meta: {
        className: 'NacUserRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: NacUserDTODef, required: true }, 

        isSendPwdEmail : { type: 'boolean' }

    }),
    toString:()=>{
        return 'NacUserRequest';
    }
};



