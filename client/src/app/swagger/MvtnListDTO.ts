//imports start MvtnListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {MvtnDTO,MvtnDTODef} from "./MvtnDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnListDTO extends BaseListDTO {
   
    /**
    * Cihaz veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<MvtnDTO>;

}


export var MvtnListDTODef:IModelDef = {
    meta: {
        className: 'MvtnListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'MvtnListDTO';
    }
};



