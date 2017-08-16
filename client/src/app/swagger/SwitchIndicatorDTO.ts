//imports start SwitchIndicatorDTO

import {PortIndicatorListDTO,PortIndicatorListDTODef} from "./PortIndicatorListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Anahtarlayıcı gösterge veri transfer modeli.
*/
export interface SwitchIndicatorDTO {
   
    /**
    * Anahtarlayıcı id değeridir.
    */
    id: string;
   
    /**
    * Port gösterge veri transfer modelinin bulunduğu liste.
    */
    portList: PortIndicatorListDTO;

}


export var SwitchIndicatorDTODef:IModelDef = {
    meta: {
        className: 'SwitchIndicatorDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        id : { type: 'string', required: true }, 

        portList : { type: PortIndicatorListDTODef, required: true }

    },
    toString:()=>{
        return 'SwitchIndicatorDTO';
    }
};



