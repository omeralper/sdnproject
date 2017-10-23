//imports start SfcListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {SfcDTO,SfcDTODef} from "./SfcDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SfcListDTO extends BaseListDTO {
   
    /**
    * Sfc'lerin bulunduğu listedir.
    */
    list: Array<SfcDTO>;

}


export var SfcListDTODef:IModelDef = {
    meta: {
        className: 'SfcListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SfcListDTO';
    }
};



