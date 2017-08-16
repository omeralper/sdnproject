//imports start HostStatsListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {HostStatsDTO,HostStatsDTODef} from "./HostStatsDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface HostStatsListResponse extends GenericResponse {
   
    /**
    * Uç Birime ait istatistik verilerinin bulunduğu listedir.
    */
    data: Array<HostStatsDTO>;

}


export var HostStatsListResponseDef:IModelDef = {
    meta: {
        className: 'HostStatsListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'HostStatsListResponse';
    }
};



