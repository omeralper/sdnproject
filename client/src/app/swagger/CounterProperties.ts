//imports start CounterProperties



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* id numarası ile belirtilen gösterge sayaç ise özellik belirten verilerine (metadata) ait alanları içerir.
*/
export interface CounterProperties {
   
    /**
    * id numarası ile belirtilen sayacın artım hızının (zamana göre birinci türevidir) hesaplandığı bilgisidir.
    */
    speedEnabled?: boolean;
   
    /**
    * id numarası ile belirtilen sayacın artım ivmesinin (zamana göre ikinci türevidir) hesaplandığı bilgisidir.
    */
    accerelationEnabled?: boolean;

}


export var CounterPropertiesDef:IModelDef = {
    meta: {
        className: 'CounterProperties',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        speedEnabled : { type: 'boolean' }, 

        accerelationEnabled : { type: 'boolean' }

    },
    toString:()=>{
        return 'CounterProperties';
    }
};



