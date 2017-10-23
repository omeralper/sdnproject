//imports start MeterStatsDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {MeterStat,MeterStatDef} from "./MeterStat";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MeterStatsDTO extends BaseDTO {
   
    /**
    * OF meter istatistikleri.
    */
    meterStats: MeterStat;

}


export var MeterStatsDTODef:IModelDef = {
    meta: {
        className: 'MeterStatsDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        meterStats : { type: MeterStatDef, required: true }

    }),
    toString:()=>{
        return 'MeterStatsDTO';
    }
};



