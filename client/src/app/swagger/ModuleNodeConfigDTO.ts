//imports start ModuleNodeConfigDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {ConfigDefinitionDTO,ConfigDefinitionDTODef} from "./ConfigDefinitionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ModuleNodeConfigDTO extends BaseDTO {
   
    /**
    * Node versiyon değeri.
    */
    nodeVersion?: string;
   
    /**
    * Konfigürasyon değeri.
    */
    configValue: string;
   
    /**
    * Konfigürasyon tanım verisi.
    */
    configDefinition: ConfigDefinitionDTO;
   
    /**
    * Node id değeri.
    */
    nodeId?: string;
   
    /**
    * Konfigürasyon id değeri.
    */
    configId: number;

}


export var ModuleNodeConfigDTODef:IModelDef = {
    meta: {
        className: 'ModuleNodeConfigDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        nodeVersion : { type: 'string' }, 

        configValue : { type: 'string', required: true }, 

        configDefinition : { type: ConfigDefinitionDTODef, required: true }, 

        nodeId : { type: 'string' }, 

        configId : { type: 'number', required: true }

    }),
    toString:()=>{
        return 'ModuleNodeConfigDTO';
    }
};



