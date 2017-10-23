//imports start FlowSearchRequest

import {FlowSearchOptions,FlowSearchOptionsDef} from "./FlowSearchOptions";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FlowSearchRequest extends GenericRequest {
   options: FlowSearchOptions;

}


export var FlowSearchRequestDef:IModelDef = {
    meta: {
        className: 'FlowSearchRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        options : { type: FlowSearchOptionsDef, required: true }

    }),
    toString:()=>{
        return 'FlowSearchRequest';
    }
};



