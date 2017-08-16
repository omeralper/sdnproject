//imports start SwitchStatsDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {StatsDetail,StatsDetailDef} from "./StatsDetail";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SwitchStatsDTO extends BaseDTO {
   
    /**
    * Anahtarlayıcı istatistikleri.
    */
    stats: StatsDetail;

}


export var SwitchStatsDTODef:IModelDef = {
    meta: {
        className: 'SwitchStatsDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        stats : { type: StatsDetailDef, required: true }

    }),
    toString:()=>{
        return 'SwitchStatsDTO';
    }
};



