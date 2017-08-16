//imports start ModuleNodesListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ModuleNodesDTO,ModuleNodesDTODef} from "./ModuleNodesDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ModuleNodesListDTO extends BaseListDTO {
   
    /**
    * Modül node tanımlarının bulunduğu listedir.
    */
    list: Array<ModuleNodesDTO>;

}


export var ModuleNodesListDTODef:IModelDef = {
    meta: {
        className: 'ModuleNodesListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'ModuleNodesListDTO';
    }
};



