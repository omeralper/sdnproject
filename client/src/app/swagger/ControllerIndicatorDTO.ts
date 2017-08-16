//imports start ControllerIndicatorDTO

import {SwitchIndicatorListDTO,SwitchIndicatorListDTODef} from "./SwitchIndicatorListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Kontrolcü gösterge veri transfer modeli.
*/
export interface ControllerIndicatorDTO {
   
    /**
    * IPv4 adresi.
    */
    address: string;
   
    /**
    * Anahtarlayıcı gösterge veri transfer modelinin bulunduğu liste.
    */
    switchList: SwitchIndicatorListDTO;

}


export var ControllerIndicatorDTODef:IModelDef = {
    meta: {
        className: 'ControllerIndicatorDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        address : { type: 'string', required: true }, 

        switchList : { type: SwitchIndicatorListDTODef, required: true }

    },
    toString:()=>{
        return 'ControllerIndicatorDTO';
    }
};



