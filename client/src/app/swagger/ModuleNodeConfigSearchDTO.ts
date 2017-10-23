//imports start ModuleNodeConfigSearchDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {NODETYPE,NODETYPEDef} from "./NODETYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ModuleNodeConfigSearchDTO extends BaseDTO {
   
    /**
    * Node versiyon değeri.
    */
    nodeVersion?: string;
   
    /**
    * Modül node tipi.
    */
    nodeType: NODETYPE;
   
    /**
    * Node id değeri.
    */
    nodeId?: string;

}


export var ModuleNodeConfigSearchDTODef:IModelDef = {
    meta: {
        className: 'ModuleNodeConfigSearchDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        nodeVersion : { type: 'string' }, 

        nodeType : { type: NODETYPEDef, required: true }, 

        nodeId : { type: 'string' }

    }),
    toString:()=>{
        return 'ModuleNodeConfigSearchDTO';
    }
};



