//imports start ComputeHostStatisticsDTO

import {ComputeStatisticsDTO,ComputeStatisticsDTODef} from "./ComputeStatisticsDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Node&#39;un istatistik bilgilerini tutan veri modeli
*/
export interface ComputeHostStatisticsDTO {
   statistics: ComputeStatisticsDTO;
   
    /**
    * Sunucudan dönen bütün veriyi saglar
    */
    rawResponseData: string;

}


export var ComputeHostStatisticsDTODef:IModelDef = {
    meta: {
        className: 'ComputeHostStatisticsDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        statistics : { type: ComputeStatisticsDTODef, required: true }, 

        rawResponseData : { type: 'string', required: true }

    },
    toString:()=>{
        return 'ComputeHostStatisticsDTO';
    }
};



