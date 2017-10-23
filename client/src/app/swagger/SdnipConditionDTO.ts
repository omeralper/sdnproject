//imports start SdnipConditionDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {SdnipMatchSetDTO,SdnipMatchSetDTODef} from "./SdnipMatchSetDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipConditionDTO extends BaseDTO {
   
    /**
    * Prefix listesi ve eşleşme durumu
    */
    prefixMatchSet?: SdnipMatchSetDTO;
   
    /**
    * Komşu listesi ve eşleşme durumu
    */
    neighborMatchSet?: SdnipMatchSetDTO;
   
    /**
    * Otomon Sistem Numarası listesi ve eşleşme durumu
    */
    asPathMatchSet?: SdnipMatchSetDTO;

}


export var SdnipConditionDTODef:IModelDef = {
    meta: {
        className: 'SdnipConditionDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        prefixMatchSet : { type: SdnipMatchSetDTODef }, 

        neighborMatchSet : { type: SdnipMatchSetDTODef }, 

        asPathMatchSet : { type: SdnipMatchSetDTODef }

    }),
    toString:()=>{
        return 'SdnipConditionDTO';
    }
};



