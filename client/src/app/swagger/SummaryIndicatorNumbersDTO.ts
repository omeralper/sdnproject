//imports start SummaryIndicatorNumbersDTO



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SummaryIndicatorNumbersDTO {
   
    /**
    * Kontrolcü sayısını tutar.
    */
    controllerNumber: number;
   
    /**
    * Anahtarlayıcı sayısını tutar.
    */
    switchNumber: number;
   
    /**
    * Bağlantı sayısını tutar.
    */
    linkNumber: number;
   
    /**
    * Uç birim sayısını tutar.
    */
    hostNumber: number;
   
    /**
    * Sanal ağ sayısını tutar.
    */
    mvtnNumber: number;

}


export var SummaryIndicatorNumbersDTODef:IModelDef = {
    meta: {
        className: 'SummaryIndicatorNumbersDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        controllerNumber : { type: 'number', required: true }, 

        switchNumber : { type: 'number', required: true }, 

        linkNumber : { type: 'number', required: true }, 

        hostNumber : { type: 'number', required: true }, 

        mvtnNumber : { type: 'number', required: true }

    },
    toString:()=>{
        return 'SummaryIndicatorNumbersDTO';
    }
};



