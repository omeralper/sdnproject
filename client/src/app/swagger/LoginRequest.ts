//imports start LoginRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {LoginOpts,LoginOptsDef} from "./LoginOpts";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LoginRequest extends GenericRequest {
   data: LoginOpts;

}


export var LoginRequestDef:IModelDef = {
    meta: {
        className: 'LoginRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: LoginOptsDef, required: true }

    }),
    toString:()=>{
        return 'LoginRequest';
    }
};



