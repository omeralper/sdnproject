//imports start VimInfoListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {VimInfoDTO,VimInfoDTODef} from "./VimInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimInfoListDTO extends BaseListDTO {
   
    /**
    * VIM bilgilerinin her biri icin ayrı objelerinin tutuldugu yer
    */
    list: Array<VimInfoDTO>;

}


export var VimInfoListDTODef:IModelDef = {
    meta: {
        className: 'VimInfoListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'VimInfoListDTO';
    }
};



