//imports start AccessProfileCountResponse

import {AccessProfileCountOptions,AccessProfileCountOptionsDef} from "./AccessProfileCountOptions";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessProfileCountResponse extends GenericResponse {
   data: AccessProfileCountOptions;

}


export var AccessProfileCountResponseDef:IModelDef = {
    meta: {
        className: 'AccessProfileCountResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AccessProfileCountOptionsDef, required: true }

    }),
    toString:()=>{
        return 'AccessProfileCountResponse';
    }
};



