//imports start PermListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {PermDTO,PermDTODef} from "./PermDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PermListDTO extends BaseListDTO {
   
    /**
    * Yetki veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<PermDTO>;

}


export var PermListDTODef:IModelDef = {
    meta: {
        className: 'PermListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'PermListDTO';
    }
};



