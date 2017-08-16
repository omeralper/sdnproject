//imports start VersionNodesDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VersionNodesDTO extends BaseDTO {
   
    /**
    * Modül versiyon değeri.
    */
    nodeVersion: string;
   
    /**
    * Modül versiyonlarına gruplanmış node listesi.
    */
    nodes?: Array<string>;

}


export var VersionNodesDTODef:IModelDef = {
    meta: {
        className: 'VersionNodesDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        nodeVersion : { type: 'string', required: true }, 

        nodes : { type: 'Array' }

    }),
    toString:()=>{
        return 'VersionNodesDTO';
    }
};



