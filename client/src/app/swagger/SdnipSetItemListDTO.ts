//imports start SdnipSetItemListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {SdnipSetItemDTO,SdnipSetItemDTODef} from "./SdnipSetItemDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipSetItemListDTO extends BaseListDTO {
   
    /**
    * Eşleşecek eleman listesi
    */
    list: Array<SdnipSetItemDTO>;

}


export var SdnipSetItemListDTODef:IModelDef = {
    meta: {
        className: 'SdnipSetItemListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SdnipSetItemListDTO';
    }
};



