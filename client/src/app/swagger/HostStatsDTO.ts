//imports start HostStatsDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {HostStat,HostStatDef} from "./HostStat";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface HostStatsDTO extends BaseDTO {
   
    /**
    * Cihazın bağlı bulunduğu portun istatistikleri.
    */
    hostStats: HostStat;

}


export var HostStatsDTODef:IModelDef = {
    meta: {
        className: 'HostStatsDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        hostStats : { type: HostStatDef, required: true }

    }),
    toString:()=>{
        return 'HostStatsDTO';
    }
};



