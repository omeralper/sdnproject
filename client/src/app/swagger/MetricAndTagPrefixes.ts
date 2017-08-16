//imports start MetricAndTagPrefixes

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MetricAndTagPrefixes extends GenericRequest {
   metricPrefix: string;
   tagPrefix: string;

}


export var MetricAndTagPrefixesDef:IModelDef = {
    meta: {
        className: 'MetricAndTagPrefixes',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        metricPrefix : { type: 'string', required: true }, 

        tagPrefix : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'MetricAndTagPrefixes';
    }
};



