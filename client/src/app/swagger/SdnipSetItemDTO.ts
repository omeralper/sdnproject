//imports start SdnipSetItemDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipSetItemDTO extends BaseDTO {
   
    /**
    * Eşleşecek eleman
    */
    item: string;

}


export var SdnipSetItemDTODef:IModelDef = {
    meta: {
        className: 'SdnipSetItemDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        item : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'SdnipSetItemDTO';
    }
};



