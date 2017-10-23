//imports start PPPSubPathDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {LinkDTO,LinkDTODef} from "./LinkDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PPPSubPathDTO extends BaseDTO {
   
    /**
    * Patika linki veri transfer modellerinin bulunduğu listedir.
    */
    links?: Array<LinkDTO>;

}


export var PPPSubPathDTODef:IModelDef = {
    meta: {
        className: 'PPPSubPathDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        links : { type: 'Array' }

    }),
    toString:()=>{
        return 'PPPSubPathDTO';
    }
};



