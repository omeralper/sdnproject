//imports start PortStatsDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {PortStat,PortStatDef} from "./PortStat";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PortStatsDTO extends BaseDTO {
   
    /**
    * Port İstatistikleri
    */
    portDetails: Array<PortStat>;

}


export var PortStatsDTODef:IModelDef = {
    meta: {
        className: 'PortStatsDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        portDetails : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'PortStatsDTO';
    }
};



