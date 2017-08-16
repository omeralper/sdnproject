//imports start NacGroupListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {NacGroupDTO,NacGroupDTODef} from "./NacGroupDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacGroupListDTO extends BaseListDTO {
   
    /**
    * Nac Grup veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<NacGroupDTO>;

}


export var NacGroupListDTODef:IModelDef = {
    meta: {
        className: 'NacGroupListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'NacGroupListDTO';
    }
};



