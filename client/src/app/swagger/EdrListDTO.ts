//imports start EdrListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {EdrDTO,EdrDTODef} from "./EdrDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EdrListDTO extends BaseListDTO {
   
    /**
    * EDR nesnelerinin bulunduğu listedir.
    */
    list: Array<EdrDTO>;

}


export var EdrListDTODef:IModelDef = {
    meta: {
        className: 'EdrListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'EdrListDTO';
    }
};



