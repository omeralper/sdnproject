//imports start PortIndicatorListDTO



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Port gösterge liste veri transfer modeli.
*/
export interface PortIndicatorListDTO {
   
    /**
    * Port numaralarının listesi.
    */
    list: Array<number>;

}


export var PortIndicatorListDTODef:IModelDef = {
    meta: {
        className: 'PortIndicatorListDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        list : { type: 'Array', required: true }

    },
    toString:()=>{
        return 'PortIndicatorListDTO';
    }
};



