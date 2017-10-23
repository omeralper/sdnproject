//imports start ServiceActionListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {ServiceActionListDTO,ServiceActionListDTODef} from "./ServiceActionListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ServiceActionListResponse extends GenericResponse {
   data: ServiceActionListDTO;

}


export var ServiceActionListResponseDef:IModelDef = {
    meta: {
        className: 'ServiceActionListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ServiceActionListDTODef, required: true }

    }),
    toString:()=>{
        return 'ServiceActionListResponse';
    }
};



