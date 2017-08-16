//imports start PortStatsListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {PortStatsDTO,PortStatsDTODef} from "./PortStatsDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PortStatsListResponse extends GenericResponse {
   
    /**
    * Anahtarlayıcıların portlarına ait istatistik verilerinin bulunduğu listedir.
    */
    data: Array<PortStatsDTO>;

}


export var PortStatsListResponseDef:IModelDef = {
    meta: {
        className: 'PortStatsListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'PortStatsListResponse';
    }
};



