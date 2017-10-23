//imports start ControllerNodeResponse

import {ControllerNodeDTO,ControllerNodeDTODef} from "./ControllerNodeDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ControllerNodeResponse extends GenericResponse {
   data: ControllerNodeDTO;

}


export var ControllerNodeResponseDef:IModelDef = {
    meta: {
        className: 'ControllerNodeResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ControllerNodeDTODef, required: true }

    }),
    toString:()=>{
        return 'ControllerNodeResponse';
    }
};



