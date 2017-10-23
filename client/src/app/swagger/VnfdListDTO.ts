//imports start VnfdListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {VnfdDTO,VnfdDTODef} from "./VnfdDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfdListDTO extends BaseListDTO {
   
    /**
    * Vnfd tiplerinin bulunduğu listedir.
    */
    list: Array<VnfdDTO>;

}


export var VnfdListDTODef:IModelDef = {
    meta: {
        className: 'VnfdListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'VnfdListDTO';
    }
};



