//imports start MetricAndTagNames

import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MetricAndTagNames extends GenericResponse {
   
    /**
    * TSDB'deki metriklerin listesi
    */
    metricNames: Array<string>;
   
    /**
    * TSDB'deki taglerin listesi
    */
    tagNames: Array<string>;

}


export var MetricAndTagNamesDef:IModelDef = {
    meta: {
        className: 'MetricAndTagNames',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        metricNames : { type: 'Array', required: true }, 

        tagNames : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'MetricAndTagNames';
    }
};



