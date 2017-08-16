//imports start FlowListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {FlowDTO,FlowDTODef} from "./FlowDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FlowListDTO extends BaseListDTO {
   
    /**
    * Akış veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<FlowDTO>;

}


export var FlowListDTODef:IModelDef = {
    meta: {
        className: 'FlowListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'FlowListDTO';
    }
};



