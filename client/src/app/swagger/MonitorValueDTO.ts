//imports start MonitorValueDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {CounterValues,CounterValuesDef} from "./CounterValues";
import {GaugeValues,GaugeValuesDef} from "./GaugeValues";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorValueDTO extends BaseDTO {
   
    /**
    * id numarası ile belirtilen gösterge sayaç ise değer içeren verilerine ait alanları içerir.
    */
    counterFields?: CounterValues;
   
    /**
    * id numarası ile belirtilen gösterge ölçer ise özellik belirten verilerine (metadata) ait alanları içerir.
    */
    gaugeFields?: GaugeValues;

}


export var MonitorValueDTODef:IModelDef = {
    meta: {
        className: 'MonitorValueDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        counterFields : { type: CounterValuesDef }, 

        gaugeFields : { type: GaugeValuesDef }

    }),
    toString:()=>{
        return 'MonitorValueDTO';
    }
};



