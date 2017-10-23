//imports start FlowDeleteRequest

import {FlowDeleteOptions,FlowDeleteOptionsDef} from "./FlowDeleteOptions";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FlowDeleteRequest extends GenericRequest {
   options: FlowDeleteOptions;

}


export var FlowDeleteRequestDef:IModelDef = {
    meta: {
        className: 'FlowDeleteRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        options : { type: FlowDeleteOptionsDef, required: true }

    }),
    toString:()=>{
        return 'FlowDeleteRequest';
    }
};



