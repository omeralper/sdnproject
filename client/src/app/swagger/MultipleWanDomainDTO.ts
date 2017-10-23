//imports start MultipleWanDomainDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {WanDomainDTO,WanDomainDTODef} from "./WanDomainDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MultipleWanDomainDTO extends BaseDTO {
   
    /**
    * Alan tanımı veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<WanDomainDTO>;

}


export var MultipleWanDomainDTODef:IModelDef = {
    meta: {
        className: 'MultipleWanDomainDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'MultipleWanDomainDTO';
    }
};



