//imports start SdnipStatementListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {SdnipStatementDTO,SdnipStatementDTODef} from "./SdnipStatementDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipStatementListDTO extends BaseListDTO {
   
    /**
    * Durum tanımları listesidir
    */
    list: Array<SdnipStatementDTO>;

}


export var SdnipStatementListDTODef:IModelDef = {
    meta: {
        className: 'SdnipStatementListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SdnipStatementListDTO';
    }
};



