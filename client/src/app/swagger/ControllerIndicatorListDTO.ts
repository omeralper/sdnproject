//imports start ControllerIndicatorListDTO

import {ControllerIndicatorDTO,ControllerIndicatorDTODef} from "./ControllerIndicatorDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Kontrolcü gösterge listesi veri transfer modeli.
*/
export interface ControllerIndicatorListDTO {
   
    /**
    * Kontrolcü gösterge veri transfer modellerinin bulunduğu liste.
    */
    list: Array<ControllerIndicatorDTO>;

}


export var ControllerIndicatorListDTODef:IModelDef = {
    meta: {
        className: 'ControllerIndicatorListDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        list : { type: 'Array', required: true }

    },
    toString:()=>{
        return 'ControllerIndicatorListDTO';
    }
};



