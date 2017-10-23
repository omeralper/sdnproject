//imports start SfcTypeListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {SfcTypeDTO,SfcTypeDTODef} from "./SfcTypeDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SfcTypeListDTO extends BaseListDTO {
   
    /**
    * Sfc tiplerinin bulunduğu listedir.
    */
    list: Array<SfcTypeDTO>;

}


export var SfcTypeListDTODef:IModelDef = {
    meta: {
        className: 'SfcTypeListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SfcTypeListDTO';
    }
};



