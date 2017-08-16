//imports start MonitorAlarmSetDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorAlarmSetDTO extends BaseDTO {
   
    /**
    * göstergeye ait id numarasıdır.
    */
    idList: Array<string>;
   
    /**
    * id numarası ile belirtilen ölçerin histerisisli alarm davranışının yüksek eşik değeridir.
    */
    hiAlarm: number;
   
    /**
    * id numarası ile belirtilen ölçerin histerisisli alarm davranışının düşük eşik değeridir.
    */
    loAlarm: number;

}


export var MonitorAlarmSetDTODef:IModelDef = {
    meta: {
        className: 'MonitorAlarmSetDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        idList : { type: 'Array', required: true }, 

        hiAlarm : { type: 'number', required: true }, 

        loAlarm : { type: 'number', required: true }

    }),
    toString:()=>{
        return 'MonitorAlarmSetDTO';
    }
};



