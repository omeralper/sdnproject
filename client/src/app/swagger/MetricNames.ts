//imports start MetricNames

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MetricNames extends GenericRequest {
   
    /**
    * tagleri istenen metriklerin adları
    */
    metricNames: Array<string>;

}


export var MetricNamesDef:IModelDef = {
    meta: {
        className: 'MetricNames',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        metricNames : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'MetricNames';
    }
};



