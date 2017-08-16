//imports start ComputeStatisticsUptimeDetail



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Istatistik veri modeli
*/
export interface ComputeStatisticsUptimeDetail {
   
    /**
    * mevcut node'un zamanı
    */
    currentNodeTime?: string;
   
    /**
    * ne zamandan beri calistigi
    */
    runningTime?: string;
   
    /**
    * sistemdeki kullanıcı sayısı
    */
    loggedUsers?: number;
   
    /**
    * 
    */
    past1MinLoad?: number;
   
    /**
    * 
    */
    past5MinLoad?: number;
   
    /**
    * 
    */
    past15MinLoad?: number;

}


export var ComputeStatisticsUptimeDetailDef:IModelDef = {
    meta: {
        className: 'ComputeStatisticsUptimeDetail',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        currentNodeTime : { type: 'string' }, 

        runningTime : { type: 'string' }, 

        loggedUsers : { type: 'number' }, 

        past1MinLoad : { type: 'number' }, 

        past5MinLoad : { type: 'number' }, 

        past15MinLoad : { type: 'number' }

    },
    toString:()=>{
        return 'ComputeStatisticsUptimeDetail';
    }
};



