//imports start LinkListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {LinkDTO,LinkDTODef} from "./LinkDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LinkListDTO extends BaseListDTO {
   
    /**
    * Bağlantı veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<LinkDTO>;

}


export var LinkListDTODef:IModelDef = {
    meta: {
        className: 'LinkListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'LinkListDTO';
    }
};



