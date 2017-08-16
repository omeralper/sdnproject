//imports start OvsdbPortNumberDTO



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Port tanımını tutar
*/
export interface OvsdbPortNumberDTO {
   
    /**
    * Port numarası
    */
    number: number;
   
    /**
    * Port Adı
    */
    name: string;
   
    /**
    * Port adı var mı yok mu bilgisini tutar
    */
    hasName: boolean;

}


export var OvsdbPortNumberDTODef:IModelDef = {
    meta: {
        className: 'OvsdbPortNumberDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        number : { type: 'number', required: true }, 

        name : { type: 'string', required: true }, 

        hasName : { type: 'boolean', required: true }

    },
    toString:()=>{
        return 'OvsdbPortNumberDTO';
    }
};



