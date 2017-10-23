//imports start UsernameRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface UsernameRequest extends GenericRequest {
   
    /**
    * Kullanıcı adı.
    */
    username: string;

}


export var UsernameRequestDef:IModelDef = {
    meta: {
        className: 'UsernameRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        username : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'UsernameRequest';
    }
};



