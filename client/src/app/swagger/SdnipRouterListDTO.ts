//imports start SdnipRouterListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {SdnipRouterDTO,SdnipRouterDTODef} from "./SdnipRouterDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipRouterListDTO extends BaseListDTO {
   
    /**
    * Sdnip rotalayıcılarının bulunduğu listedir.
    */
    list: Array<SdnipRouterDTO>;

}


export var SdnipRouterListDTODef:IModelDef = {
    meta: {
        className: 'SdnipRouterListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SdnipRouterListDTO';
    }
};



