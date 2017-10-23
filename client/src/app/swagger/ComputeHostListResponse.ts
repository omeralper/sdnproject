//imports start ComputeHostListResponse

import {ComputeHostListDTO,ComputeHostListDTODef} from "./ComputeHostListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ComputeHostListResponse extends GenericResponse {
   data: ComputeHostListDTO;

}


export var ComputeHostListResponseDef:IModelDef = {
    meta: {
        className: 'ComputeHostListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ComputeHostListDTODef, required: true }

    }),
    toString:()=>{
        return 'ComputeHostListResponse';
    }
};



