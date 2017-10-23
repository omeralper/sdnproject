//imports start TopologyRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {TopologyOptions,TopologyOptionsDef} from "./TopologyOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface TopologyRequest extends GenericRequest {
   options: TopologyOptions;

}


export var TopologyRequestDef:IModelDef = {
    meta: {
        className: 'TopologyRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        options : { type: TopologyOptionsDef, required: true }

    }),
    toString:()=>{
        return 'TopologyRequest';
    }
};



