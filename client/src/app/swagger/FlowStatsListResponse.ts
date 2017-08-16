//imports start FlowStatsListResponse

import {FlowStatsDTO,FlowStatsDTODef} from "./FlowStatsDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FlowStatsListResponse extends GenericResponse {
   
    /**
    * Kullanıcı akışlarına ait istatistik verilerinin bulunduğu listedir.
    */
    data: Array<FlowStatsDTO>;

}


export var FlowStatsListResponseDef:IModelDef = {
    meta: {
        className: 'FlowStatsListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'FlowStatsListResponse';
    }
};



