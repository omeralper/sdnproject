//imports start ControllerNodeListResponse

import {ControllerNodeListDTO,ControllerNodeListDTODef} from "./ControllerNodeListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ControllerNodeListResponse extends GenericResponse {
   data: ControllerNodeListDTO;

}


export var ControllerNodeListResponseDef:IModelDef = {
    meta: {
        className: 'ControllerNodeListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ControllerNodeListDTODef, required: true }

    }),
    toString:()=>{
        return 'ControllerNodeListResponse';
    }
};



