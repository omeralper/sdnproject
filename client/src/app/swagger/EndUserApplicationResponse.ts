//imports start EndUserApplicationResponse

import {EndUserApplicationDTO,EndUserApplicationDTODef} from "./EndUserApplicationDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EndUserApplicationResponse extends GenericResponse {
   data?: EndUserApplicationDTO;

}


export var EndUserApplicationResponseDef:IModelDef = {
    meta: {
        className: 'EndUserApplicationResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: EndUserApplicationDTODef }

    }),
    toString:()=>{
        return 'EndUserApplicationResponse';
    }
};



