//imports start NacLoginResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacLoginResult,NacLoginResultDef} from "./NacLoginResult";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacLoginResponse extends GenericResponse {
   data: NacLoginResult;

}


export var NacLoginResponseDef:IModelDef = {
    meta: {
        className: 'NacLoginResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacLoginResultDef, required: true }

    }),
    toString:()=>{
        return 'NacLoginResponse';
    }
};



