//imports start MeterStatsListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MeterStatsDTO,MeterStatsDTODef} from "./MeterStatsDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MeterStatsListResponse extends GenericResponse {
   
    /**
    * OF meter istatistik verilerinin bulunduğu listedir.
    */
    data: Array<MeterStatsDTO>;

}


export var MeterStatsListResponseDef:IModelDef = {
    meta: {
        className: 'MeterStatsListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'MeterStatsListResponse';
    }
};



