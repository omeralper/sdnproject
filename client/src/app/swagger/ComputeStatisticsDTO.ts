//imports start ComputeStatisticsDTO

import {ComputeStatisticsUptimeDetail,ComputeStatisticsUptimeDetailDef} from "./ComputeStatisticsUptimeDetail";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Istatistik veri modeli
*/
export interface ComputeStatisticsDTO {
   
    /**
    * 
    */
    vcpus?: number;
   
    /**
    * 
    */
    vcpusUsed?: number;
   
    /**
    * 
    */
    runningVms?: number;
   
    /**
    * 
    */
    currentWorkload?: number;
   
    /**
    * 
    */
    memoryMb?: number;
   
    /**
    * 
    */
    memoryMbUsed?: number;
   
    /**
    * 
    */
    freeRamMb?: number;
   
    /**
    * 
    */
    freeDiskGb?: number;
   
    /**
    * 
    */
    diskAvailableLeast?: number;
   
    /**
    * 
    */
    localGb?: number;
   
    /**
    * 
    */
    localGbUsed?: number;
   
    /**
    * 
    */
    computeHostId?: number;
   uptimeDetail?: ComputeStatisticsUptimeDetail;
   
    /**
    * 
    */
    computeHostIp?: string;

}


export var ComputeStatisticsDTODef:IModelDef = {
    meta: {
        className: 'ComputeStatisticsDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        vcpus : { type: 'number' }, 

        vcpusUsed : { type: 'number' }, 

        runningVms : { type: 'number' }, 

        currentWorkload : { type: 'number' }, 

        memoryMb : { type: 'number' }, 

        memoryMbUsed : { type: 'number' }, 

        freeRamMb : { type: 'number' }, 

        freeDiskGb : { type: 'number' }, 

        diskAvailableLeast : { type: 'number' }, 

        localGb : { type: 'number' }, 

        localGbUsed : { type: 'number' }, 

        computeHostId : { type: 'number' }, 

        uptimeDetail : { type: ComputeStatisticsUptimeDetailDef }, 

        computeHostIp : { type: 'string' }

    },
    toString:()=>{
        return 'ComputeStatisticsDTO';
    }
};



