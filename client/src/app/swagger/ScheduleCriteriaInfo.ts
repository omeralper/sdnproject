//imports start ScheduleCriteriaInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Politika uygulanma zaman bilgilerini içeren veri modeli
*/
export interface ScheduleCriteriaInfo {
   
    /**
    * Politikanın uygulanmaya başlama zamanı.
    */
    startTime?: Date;
   
    /**
    * Politikanın uygulanma bitiş zamanı.
    */
    endTime?: Date;
   
    /**
    * Politikanın uygulanma cron bilgisi.
    */
    cronData?: string;

}


export var ScheduleCriteriaInfoDef:IModelDef = {
    meta: {
        className: 'ScheduleCriteriaInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        startTime : { type: 'Date' }, 

        endTime : { type: 'Date' }, 

        cronData : { type: 'string' }

    },
    toString:()=>{
        return 'ScheduleCriteriaInfo';
    }
};



