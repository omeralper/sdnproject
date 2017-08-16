//imports start VnfrListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {VnfrDTO,VnfrDTODef} from "./VnfrDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfrListDTO extends BaseListDTO {
   
    /**
    * Vnfr tiplerinin bulunduğu listedir.
    */
    list: Array<VnfrDTO>;

}


export var VnfrListDTODef:IModelDef = {
    meta: {
        className: 'VnfrListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'VnfrListDTO';
    }
};



