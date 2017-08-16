//imports start ComputeHostStatisticListResponse

import {ComputeHostStatisticListDTO,ComputeHostStatisticListDTODef} from "./ComputeHostStatisticListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ComputeHostStatisticListResponse extends GenericResponse {
   data: ComputeHostStatisticListDTO;

}


export var ComputeHostStatisticListResponseDef:IModelDef = {
    meta: {
        className: 'ComputeHostStatisticListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ComputeHostStatisticListDTODef, required: true }

    }),
    toString:()=>{
        return 'ComputeHostStatisticListResponse';
    }
};



