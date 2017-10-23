//imports start SwitchStatsListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SwitchStatsDTO,SwitchStatsDTODef} from "./SwitchStatsDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SwitchStatsListResponse extends GenericResponse {
   
    /**
    * Anahtarlayıcılara ait istatistik verilerinin bulunduğu listedir.
    */
    data: Array<SwitchStatsDTO>;

}


export var SwitchStatsListResponseDef:IModelDef = {
    meta: {
        className: 'SwitchStatsListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SwitchStatsListResponse';
    }
};



