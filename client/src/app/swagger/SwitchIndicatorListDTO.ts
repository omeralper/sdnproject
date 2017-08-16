//imports start SwitchIndicatorListDTO

import {SwitchIndicatorDTO,SwitchIndicatorDTODef} from "./SwitchIndicatorDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Anahtarlayıcı gösterge listesi veri transfer modeli.
*/
export interface SwitchIndicatorListDTO {
   
    /**
    * Anahtarlayıcı gösterge veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<SwitchIndicatorDTO>;

}


export var SwitchIndicatorListDTODef:IModelDef = {
    meta: {
        className: 'SwitchIndicatorListDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        list : { type: 'Array', required: true }

    },
    toString:()=>{
        return 'SwitchIndicatorListDTO';
    }
};



