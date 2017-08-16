//imports start AlarmInfo

import {ALARMSTATUS,ALARMSTATUSDef} from "./ALARMSTATUS";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Alarm detaylarının yer aldığı veri yapısıdır.
*/
export interface AlarmInfo {
   
    /**
    * Alarm ID değeri.
    */
    id: string;
   
    /**
    * Alarm adı.
    */
    name: string;
   
    /**
    * Alarm açıklaması.
    */
    message: string;
   
    /**
    * Alarm Durumu.
    */
    status: ALARMSTATUS;

}


export var AlarmInfoDef:IModelDef = {
    meta: {
        className: 'AlarmInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        id : { type: 'string', required: true }, 

        name : { type: 'string', required: true }, 

        message : { type: 'string', required: true }, 

        status : { type: ALARMSTATUSDef, required: true }

    },
    toString:()=>{
        return 'AlarmInfo';
    }
};



