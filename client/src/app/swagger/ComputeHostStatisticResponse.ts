//imports start ComputeHostStatisticResponse

import {ComputeStatisticsDTO,ComputeStatisticsDTODef} from "./ComputeStatisticsDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ComputeHostStatisticResponse extends GenericResponse {
   data: ComputeStatisticsDTO;
   
    /**
    * VIM id
    */
    vimInstanceId?: string;

}


export var ComputeHostStatisticResponseDef:IModelDef = {
    meta: {
        className: 'ComputeHostStatisticResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ComputeStatisticsDTODef, required: true }, 

        vimInstanceId : { type: 'string' }

    }),
    toString:()=>{
        return 'ComputeHostStatisticResponse';
    }
};



