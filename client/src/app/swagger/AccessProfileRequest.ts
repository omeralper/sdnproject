//imports start AccessProfileRequest

import {AccessProfileDTO,AccessProfileDTODef} from "./AccessProfileDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessProfileRequest extends GenericRequest {
   data: AccessProfileDTO;

}


export var AccessProfileRequestDef:IModelDef = {
    meta: {
        className: 'AccessProfileRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: AccessProfileDTODef, required: true }

    }),
    toString:()=>{
        return 'AccessProfileRequest';
    }
};



