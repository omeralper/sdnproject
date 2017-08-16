//imports start MonitorInfoDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {CounterProperties,CounterPropertiesDef} from "./CounterProperties";
import {GaugeProperties,GaugePropertiesDef} from "./GaugeProperties";
import {MONITORTYPE,MONITORTYPEDef} from "./MONITORTYPE";
import {MonitorTagValue,MonitorTagValueDef} from "./MonitorTagValue";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorInfoDTO extends BaseDTO {
   
    /**
    * id numarası ile belirtilen göstergeye sahip olan uygulamanın adıdır.
    */
    owner: string;
   
    /**
    * id numarası ile belirtilen göstergenin saniye biriminden ekranda güncellenme periyodudur.
    */
    period: number;
   
    /**
    * id numarası ile belirtilen göstergenin TSDB'den okunduğu bilgisidir.
    */
    comesFromTSDB: boolean;
   
    /**
    * id numarası ile belirtilen göstergenin dağıtık olduğu bilgisidir.
    */
    distributed: boolean;
   
    /**
    * id numarası ile belirtilen göstergenin bulunduğu kontrolcünün id numarasıdır.
    */
    node: string;
   
    /**
    * id numarası ile belirtilen göstergenin türüdür.
    */
    monitorType: MONITORTYPE;
   
    /**
    * id numarası ile belirtilen göstergenin birimidir.
    */
    unit: string;
   
    /**
    * id numarası ile belirtilen gösterge ölçer ise özellik belirten verilerine (metadata) ait alanları içerir.
    */
    gaugeFields?: GaugeProperties;
   
    /**
    * id numarası ile belirtilen göstergenin TSDB kullanılan bir instance'ı için atanmış ayırıcı tag map listesidir.
    */
    monitorTags: Array<MonitorTagValue>;
   
    /**
    * id numarası ile belirtilen göstergenin adıdır.
    */
    name: string;
   
    /**
    * id numarası ile belirtilen göstergenin TSDB'ye yazıldığı bilgisidir.
    */
    goesToTSDB: boolean;
   
    /**
    * id numarası ile belirtilen gösterge sayaç ise özellik belirten verilerine (metadata) ait alanları içerir.
    */
    counterFields?: CounterProperties;

}


export var MonitorInfoDTODef:IModelDef = {
    meta: {
        className: 'MonitorInfoDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        owner : { type: 'string', required: true }, 

        period : { type: 'number', required: true }, 

        comesFromTSDB : { type: 'boolean', required: true }, 

        distributed : { type: 'boolean', required: true }, 

        node : { type: 'string', required: true }, 

        monitorType : { type: MONITORTYPEDef, required: true }, 

        unit : { type: 'string', required: true }, 

        gaugeFields : { type: GaugePropertiesDef }, 

        monitorTags : { type: 'Array', required: true }, 

        name : { type: 'string', required: true }, 

        goesToTSDB : { type: 'boolean', required: true }, 

        counterFields : { type: CounterPropertiesDef }

    }),
    toString:()=>{
        return 'MonitorInfoDTO';
    }
};



