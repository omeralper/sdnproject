//imports start SdnipDefinedSetListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {SdnipDefinedSetDTO,SdnipDefinedSetDTODef} from "./SdnipDefinedSetDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipDefinedSetListDTO extends BaseListDTO {
   
    /**
    * Eşleşme listesi
    */
    list: Array<SdnipDefinedSetDTO>;

}


export var SdnipDefinedSetListDTODef:IModelDef = {
    meta: {
        className: 'SdnipDefinedSetListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SdnipDefinedSetListDTO';
    }
};



