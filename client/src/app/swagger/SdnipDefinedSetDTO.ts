//imports start SdnipDefinedSetDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {SDNIPDEFINEDSETTYPE,SDNIPDEFINEDSETTYPEDef} from "./SDNIPDEFINEDSETTYPE";
import {SdnipPrefixListDTO,SdnipPrefixListDTODef} from "./SdnipPrefixListDTO";
import {SdnipSetItemListDTO,SdnipSetItemListDTODef} from "./SdnipSetItemListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipDefinedSetDTO extends BaseDTO {
   
    /**
    * Sdnip defined set ismi
    */
    name: string;
   
    /**
    * Eşleşme rotalarının bulunduğu listedir.
    */
    prefixList?: SdnipPrefixListDTO;
   
    /**
    * Eşleşecek elemanların bulunduğu listedir.
    */
    list?: SdnipSetItemListDTO;
   
    /**
    * Sdnip defined set tipi
    */
    definedSetType: SDNIPDEFINEDSETTYPE;

}


export var SdnipDefinedSetDTODef:IModelDef = {
    meta: {
        className: 'SdnipDefinedSetDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string', required: true }, 

        prefixList : { type: SdnipPrefixListDTODef }, 

        list : { type: SdnipSetItemListDTODef }, 

        definedSetType : { type: SDNIPDEFINEDSETTYPEDef, required: true }

    }),
    toString:()=>{
        return 'SdnipDefinedSetDTO';
    }
};



