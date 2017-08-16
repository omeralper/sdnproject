//imports start TopologyInfoListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {TopologyInfoDTO,TopologyInfoDTODef} from "./TopologyInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface TopologyInfoListDTO extends BaseListDTO {
   
    /**
    * Topoloji detay modellerinin bulunduğu listedir.
    */
    list: Array<TopologyInfoDTO>;

}


export var TopologyInfoListDTODef:IModelDef = {
    meta: {
        className: 'TopologyInfoListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'TopologyInfoListDTO';
    }
};



