//imports start AccessProfileListResponse

import {AccessProfileListDTO,AccessProfileListDTODef} from "./AccessProfileListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessProfileListResponse extends GenericResponse {
   data: AccessProfileListDTO;

}


export var AccessProfileListResponseDef:IModelDef = {
    meta: {
        className: 'AccessProfileListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AccessProfileListDTODef, required: true }

    }),
    toString:()=>{
        return 'AccessProfileListResponse';
    }
};



