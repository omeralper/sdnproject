//imports start ModuleNodeConfigListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ModuleNodeConfigDTO,ModuleNodeConfigDTODef} from "./ModuleNodeConfigDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ModuleNodeConfigListDTO extends BaseListDTO {
   
    /**
    * Modül node konfigürasyonları tanımlarının bulunduğu listedir.
    */
    list: Array<ModuleNodeConfigDTO>;

}


export var ModuleNodeConfigListDTODef:IModelDef = {
    meta: {
        className: 'ModuleNodeConfigListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'ModuleNodeConfigListDTO';
    }
};



