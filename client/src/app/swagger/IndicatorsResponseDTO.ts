//imports start IndicatorsResponseDTO

import {ControllerIndicatorListDTO,ControllerIndicatorListDTODef} from "./ControllerIndicatorListDTO";
import {SummaryIndicatorNumbersDTO,SummaryIndicatorNumbersDTODef} from "./SummaryIndicatorNumbersDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Göstergeler yanıt veri transfer modeli.
*/
export interface IndicatorsResponseDTO {
   
    /**
    * Özet gösterge sayıları veri transfer modeli.
    */
    summary: SummaryIndicatorNumbersDTO;
   
    /**
    * Kontrolcü gösterge veri transfer modellerinin bulunduğu liste.
    */
    controllerList: ControllerIndicatorListDTO;

}


export var IndicatorsResponseDTODef:IModelDef = {
    meta: {
        className: 'IndicatorsResponseDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        summary : { type: SummaryIndicatorNumbersDTODef, required: true }, 

        controllerList : { type: ControllerIndicatorListDTODef, required: true }

    },
    toString:()=>{
        return 'IndicatorsResponseDTO';
    }
};



