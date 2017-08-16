//imports start LoginResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {LoginResult,LoginResultDef} from "./LoginResult";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LoginResponse extends GenericResponse {
   data: LoginResult;

}


export var LoginResponseDef:IModelDef = {
    meta: {
        className: 'LoginResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: LoginResultDef, required: true }

    }),
    toString:()=>{
        return 'LoginResponse';
    }
};



