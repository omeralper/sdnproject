//imports start TopologyListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {TopologyListOptions,TopologyListOptionsDef} from "./TopologyListOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface TopologyListRequest extends GenericRequest {
   options: TopologyListOptions;

}


export var TopologyListRequestDef:IModelDef = {
    meta: {
        className: 'TopologyListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        options : { type: TopologyListOptionsDef, required: true }

    }),
    toString:()=>{
        return 'TopologyListRequest';
    }
};



