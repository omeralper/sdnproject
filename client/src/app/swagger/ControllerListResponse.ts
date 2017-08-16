//imports start ControllerListResponse

import {ControllerListDTO,ControllerListDTODef} from "./ControllerListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ControllerListResponse extends GenericResponse {
   data: ControllerListDTO;

}


export var ControllerListResponseDef:IModelDef = {
    meta: {
        className: 'ControllerListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ControllerListDTODef, required: true }

    }),
    toString:()=>{
        return 'ControllerListResponse';
    }
};



