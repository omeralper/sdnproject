//imports start ConfigDefinitionDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {CONFIGVALUETYPE,CONFIGVALUETYPEDef} from "./CONFIGVALUETYPE";
import {NODETYPE,NODETYPEDef} from "./NODETYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ConfigDefinitionDTO extends BaseDTO {
   
    /**
    * Konfigüre edilecek anahtar değeri.
    */
    configKey: string;
   
    /**
    * Konfigüre edilecek anahtara ait varsayılan değer.
    */
    defaultValue?: string;
   
    /**
    * Konfigüre edilecek değer tipi.
    */
    valueType: CONFIGVALUETYPE;
   
    /**
    * Konfigüre edilecek anahtarın tanımı.
    */
    description?: string;
   
    /**
    * Konfigüre edilecek komponent adı.
    */
    componentName: string;
   
    /**
    * Modül node tipi.
    */
    nodeType: NODETYPE;
   
    /**
    * Konfigürasyon tanımı tekil id değeri.
    */
    definitionId?: number;

}


export var ConfigDefinitionDTODef:IModelDef = {
    meta: {
        className: 'ConfigDefinitionDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        configKey : { type: 'string', required: true }, 

        defaultValue : { type: 'string' }, 

        valueType : { type: CONFIGVALUETYPEDef, required: true }, 

        description : { type: 'string' }, 

        componentName : { type: 'string', required: true }, 

        nodeType : { type: NODETYPEDef, required: true }, 

        definitionId : { type: 'number' }

    }),
    toString:()=>{
        return 'ConfigDefinitionDTO';
    }
};



