//imports start SdnipStatementDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {SdnipActionDTO,SdnipActionDTODef} from "./SdnipActionDTO";
import {SdnipConditionDTO,SdnipConditionDTODef} from "./SdnipConditionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipStatementDTO extends BaseDTO {
   
    /**
    * Durum ismi
    */
    name?: string;
   
    /**
    * durum için uygulanacak aksiyonu
    */
    action: SdnipActionDTO;
   
    /**
    * Durum
    */
    condition: SdnipConditionDTO;

}


export var SdnipStatementDTODef:IModelDef = {
    meta: {
        className: 'SdnipStatementDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string' }, 

        action : { type: SdnipActionDTODef, required: true }, 

        condition : { type: SdnipConditionDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipStatementDTO';
    }
};



