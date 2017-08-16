//imports start ComputeHostResponse

import {ComputeHostGenericDTO,ComputeHostGenericDTODef} from "./ComputeHostGenericDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ComputeHostResponse extends GenericResponse {
   data: ComputeHostGenericDTO;

}


export var ComputeHostResponseDef:IModelDef = {
    meta: {
        className: 'ComputeHostResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ComputeHostGenericDTODef, required: true }

    }),
    toString:()=>{
        return 'ComputeHostResponse';
    }
};



