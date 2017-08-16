//imports start GaugeProperties

import {METHODTYPE,METHODTYPEDef} from "./METHODTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* id numarası ile belirtilen gösterge ölçer ise özellik belirten verilerine (metadata) ait alanları içerir.
*/
export interface GaugeProperties {
   
    /**
    * id numarası ile belirtilen ölçerin hesaplanma yöntemini gösterir.
    */
    methodType?: METHODTYPE;
   
    /**
    * id numarası ile belirtilen ölçerin olabilecek en düşük değeridir.
    */
    loLimit?: number;
   
    /**
    * id numarası ile belirtilen ölçerin olabilecek en yüksek değeridir.
    */
    hiLimit?: number;
   
    /**
    * id numarası ile belirtilen ölçerin histerisisli alarm davranışının düşük eşik değeridir.
    */
    loAlarm?: number;
   
    /**
    * id numarası ile belirtilen ölçerin histerisisli alarm davranışının yüksek eşik değeridir.
    */
    hiAlarm?: number;
   
    /**
    * id numarası ile belirtilen ölçer için düşük değerlerin kötü olduğunu belirtir.
    */
    lowIsBad?: boolean;

}


export var GaugePropertiesDef:IModelDef = {
    meta: {
        className: 'GaugeProperties',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        methodType : { type: METHODTYPEDef }, 

        loLimit : { type: 'number' }, 

        hiLimit : { type: 'number' }, 

        loAlarm : { type: 'number' }, 

        hiAlarm : { type: 'number' }, 

        lowIsBad : { type: 'boolean' }

    },
    toString:()=>{
        return 'GaugeProperties';
    }
};



