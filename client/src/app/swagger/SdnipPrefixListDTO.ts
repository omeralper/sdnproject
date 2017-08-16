//imports start SdnipPrefixListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {SdnipPrefixDTO,SdnipPrefixDTODef} from "./SdnipPrefixDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipPrefixListDTO extends BaseListDTO {
   
    /**
    * Eşleşme rota listesi
    */
    list: Array<SdnipPrefixDTO>;

}


export var SdnipPrefixListDTODef:IModelDef = {
    meta: {
        className: 'SdnipPrefixListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SdnipPrefixListDTO';
    }
};



