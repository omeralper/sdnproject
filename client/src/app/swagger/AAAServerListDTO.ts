//imports start AAAServerListDTO

import {AAAServerDTO,AAAServerDTODef} from "./AAAServerDTO";
import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AAAServerListDTO extends BaseListDTO {
   
    /**
    * AAA sunucu veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<AAAServerDTO>;

}


export var AAAServerListDTODef:IModelDef = {
    meta: {
        className: 'AAAServerListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'AAAServerListDTO';
    }
};



