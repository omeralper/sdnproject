//imports start ConfigDefinitionListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ConfigDefinitionDTO,ConfigDefinitionDTODef} from "./ConfigDefinitionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ConfigDefinitionListDTO extends BaseListDTO {
   
    /**
    * Konfigürasyon tanımlarının bulunduğu listedir.
    */
    list: Array<ConfigDefinitionDTO>;

}


export var ConfigDefinitionListDTODef:IModelDef = {
    meta: {
        className: 'ConfigDefinitionListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'ConfigDefinitionListDTO';
    }
};



