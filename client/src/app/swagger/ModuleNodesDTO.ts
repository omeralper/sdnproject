//imports start ModuleNodesDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {NODETYPE,NODETYPEDef} from "./NODETYPE";
import {VersionNodesDTO,VersionNodesDTODef} from "./VersionNodesDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ModuleNodesDTO extends BaseDTO {
   
    /**
    * Modül node tipi.
    */
    nodeType: NODETYPE;
   
    /**
    * Modül versiyonlarına gruplanmış node listesi.
    */
    moduleVersions?: Array<VersionNodesDTO>;

}


export var ModuleNodesDTODef:IModelDef = {
    meta: {
        className: 'ModuleNodesDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        nodeType : { type: NODETYPEDef, required: true }, 

        moduleVersions : { type: 'Array' }

    }),
    toString:()=>{
        return 'ModuleNodesDTO';
    }
};



