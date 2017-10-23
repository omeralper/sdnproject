//imports start NacUsernameRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUsernameRequest extends GenericRequest {
   
    /**
    * Kullanıcı adı.
    */
    username: string;

}


export var NacUsernameRequestDef:IModelDef = {
    meta: {
        className: 'NacUsernameRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        username : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'NacUsernameRequest';
    }
};



