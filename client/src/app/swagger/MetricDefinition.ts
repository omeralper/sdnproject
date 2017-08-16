//imports start MetricDefinition

import {METRICTYPE,METRICTYPEDef} from "./METRICTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MetricDefinition {
   metricName: string;
   producer: string;
   
    /**
    * metrik değeri tamsayı mı ondalıklı mı?
    */
    metricType: METRICTYPE;
   metricUnit: string;
   
    /**
    * TSDB'deki taglerin listesi
    */
    tagNames: Array<string>;

}


export var MetricDefinitionDef:IModelDef = {
    meta: {
        className: 'MetricDefinition',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        metricName : { type: 'string', required: true }, 

        producer : { type: 'string', required: true }, 

        metricType : { type: METRICTYPEDef, required: true }, 

        metricUnit : { type: 'string', required: true }, 

        tagNames : { type: 'Array', required: true }

    },
    toString:()=>{
        return 'MetricDefinition';
    }
};



