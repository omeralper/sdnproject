//imports start FlowResponse

import {FlowDTO,FlowDTODef} from "./FlowDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FlowResponse extends GenericResponse {
   data: FlowDTO;

}


export var FlowResponseDef:IModelDef = {
    meta: {
        className: 'FlowResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: FlowDTODef, required: true }

    }),
    toString:()=>{
        return 'FlowResponse';
    }
};



