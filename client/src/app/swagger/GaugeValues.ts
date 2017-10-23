//imports start GaugeValues



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* id numarası ile belirtilen gösterge ölçer ise özellik belirten verilerine (metadata) ait alanları içerir.
*/
export interface GaugeValues {
   
    /**
    * id numarası ile belirtilen ölçerin anlık değeridir.
    */
    value?: number;
   
    /**
    * id numarası ile belirtilen ölçer için alarm verilmiş olduğu bilgisidir.
    */
    inAlarm?: boolean;

}


export var GaugeValuesDef:IModelDef = {
    meta: {
        className: 'GaugeValues',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        value : { type: 'number' }, 

        inAlarm : { type: 'boolean' }

    },
    toString:()=>{
        return 'GaugeValues';
    }
};



