//imports start AccessProfileResponse

import {AccessProfileDTO,AccessProfileDTODef} from "./AccessProfileDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessProfileResponse extends GenericResponse {
   data?: AccessProfileDTO;

}


export var AccessProfileResponseDef:IModelDef = {
    meta: {
        className: 'AccessProfileResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AccessProfileDTODef }

    }),
    toString:()=>{
        return 'AccessProfileResponse';
    }
};



