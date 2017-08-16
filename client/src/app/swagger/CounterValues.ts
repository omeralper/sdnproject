//imports start CounterValues



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* id numarası ile belirtilen gösterge sayaç ise değer içeren verilerine ait alanları içerir.
*/
export interface CounterValues {
   
    /**
    * id numarası ile belirtilen sayacın değeridir.
    */
    value?: number;
   
    /**
    * id numarası ile belirtilen sayacın artım hızıdır (zamana göre birinci türevidir).
    */
    speed?: number;
   
    /**
    * id numarası ile belirtilen sayacın artım ivmesidir (zamana göre ikinci türevidir).
    */
    accerelation?: number;

}


export var CounterValuesDef:IModelDef = {
    meta: {
        className: 'CounterValues',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        value : { type: 'number' }, 

        speed : { type: 'number' }, 

        accerelation : { type: 'number' }

    },
    toString:()=>{
        return 'CounterValues';
    }
};



