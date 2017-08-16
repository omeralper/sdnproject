//imports start LinkStatsListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {LinkStatsDTO,LinkStatsDTODef} from "./LinkStatsDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LinkStatsListResponse extends GenericResponse {
   
    /**
    * Bağlantılara ait istatistik verilerinin bulunduğu listedir.
    */
    data: Array<LinkStatsDTO>;

}


export var LinkStatsListResponseDef:IModelDef = {
    meta: {
        className: 'LinkStatsListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'LinkStatsListResponse';
    }
};



