//imports start PathListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {PathDTO,PathDTODef} from "./PathDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PathListDTO extends BaseListDTO {
   
    /**
    * Patika veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<PathDTO>;

}


export var PathListDTODef:IModelDef = {
    meta: {
        className: 'PathListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'PathListDTO';
    }
};



