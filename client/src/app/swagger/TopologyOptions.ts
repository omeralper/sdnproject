//imports start TopologyOptions

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {TOPOLOGYTYPE,TOPOLOGYTYPEDef} from "./TOPOLOGYTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface TopologyOptions extends BaseDTO {
   
    /**
    * Detayları istenen topolojinin tipini belirtmek için kullanılır.
    */
    type: TOPOLOGYTYPE;

}


export var TopologyOptionsDef:IModelDef = {
    meta: {
        className: 'TopologyOptions',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        type : { type: TOPOLOGYTYPEDef, required: true }

    }),
    toString:()=>{
        return 'TopologyOptions';
    }
};



