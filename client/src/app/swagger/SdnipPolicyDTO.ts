//imports start SdnipPolicyDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {SdnipStatementListDTO,SdnipStatementListDTODef} from "./SdnipStatementListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipPolicyDTO extends BaseDTO {
   
    /**
    * Eşleşme politikası ismi
    */
    name: string;
   
    /**
    * Eşleşme durum tanımları listesi
    */
    statementList: SdnipStatementListDTO;

}


export var SdnipPolicyDTODef:IModelDef = {
    meta: {
        className: 'SdnipPolicyDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string', required: true }, 

        statementList : { type: SdnipStatementListDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipPolicyDTO';
    }
};



