//imports start SdnipMatchSetDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {SDNIPMATCHTYPE,SDNIPMATCHTYPEDef} from "./SDNIPMATCHTYPE";
import {SdnipDefinedSetDTO,SdnipDefinedSetDTODef} from "./SdnipDefinedSetDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipMatchSetDTO extends BaseDTO {
   
    /**
    * Eşleşme listesi
    */
    definedSet: SdnipDefinedSetDTO;
   
    /**
    * Eşleşme tipi
    */
    matchType: SDNIPMATCHTYPE;

}


export var SdnipMatchSetDTODef:IModelDef = {
    meta: {
        className: 'SdnipMatchSetDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        definedSet : { type: SdnipDefinedSetDTODef, required: true }, 

        matchType : { type: SDNIPMATCHTYPEDef, required: true }

    }),
    toString:()=>{
        return 'SdnipMatchSetDTO';
    }
};



