//imports start WanAlarmInfoDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
/*###WanAlarmInfoDTO*/


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanAlarmInfoDTO extends BaseDTO {
   
    /**
    * Yerel sanal ağ kümesinin idsi
    */
    alarmCounts?: number;
   activeAlarmCountMap?: { [key: string]: number; };
   activeEventCountMap?: { [key: string]: number; };
   
    /**
    * İstek ve cevabın oluştuğu tarih-saat bilgisi.
    */
    time?: Date;
   
    /**
    * Yerel sanal ağ kümesinin idsi
    */
    domainId?: number;
   
    /**
    * Alarmların maksimum uyarı düzeyi.
    */
    maxSeverity?: string;

}


export var WanAlarmInfoDTODef:IModelDef = {
    meta: {
        className: 'WanAlarmInfoDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        alarmCounts : { type: 'number' }, 

        activeAlarmCountMap : { type: 'Array' }, 

        activeEventCountMap : { type: 'Array' }, 

        time : { type: 'Date' }, 

        domainId : { type: 'number' }, 

        maxSeverity : { type: 'string' }

    }),
    toString:()=>{
        return 'WanAlarmInfoDTO';
    }
};



