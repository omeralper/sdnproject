//imports start ComputeHostStatisticListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ComputeStatisticsDTO,ComputeStatisticsDTODef} from "./ComputeStatisticsDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ComputeHostStatisticListDTO extends BaseListDTO {
   
    /**
    * Her bir istatistik bilgisini tutan dizi modeli
    */
    computeHostStatisticList?: Array<ComputeStatisticsDTO>;

}


export var ComputeHostStatisticListDTODef:IModelDef = {
    meta: {
        className: 'ComputeHostStatisticListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        computeHostStatisticList : { type: 'Array' }

    }),
    toString:()=>{
        return 'ComputeHostStatisticListDTO';
    }
};



