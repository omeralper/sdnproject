//imports start FlowListRequest

import {FlowListOptions,FlowListOptionsDef} from "./FlowListOptions";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FlowListRequest extends GenericRequest {
   options: FlowListOptions;

}


export var FlowListRequestDef:IModelDef = {
    meta: {
        className: 'FlowListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        options : { type: FlowListOptionsDef, required: true }

    }),
    toString:()=>{
        return 'FlowListRequest';
    }
};



