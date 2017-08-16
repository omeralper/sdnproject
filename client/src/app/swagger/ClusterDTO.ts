//imports start ClusterDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ClusterDTO extends BaseDTO {
   
    /**
    * Küme Adı.
    */
    name: string;

}


export var ClusterDTODef:IModelDef = {
    meta: {
        className: 'ClusterDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'ClusterDTO';
    }
};



