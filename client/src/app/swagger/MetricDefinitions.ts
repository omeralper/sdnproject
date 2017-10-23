//imports start MetricDefinitions

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MetricDefinition,MetricDefinitionDef} from "./MetricDefinition";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MetricDefinitions extends GenericResponse {
   metricDefs: Array<MetricDefinition>;

}


export var MetricDefinitionsDef:IModelDef = {
    meta: {
        className: 'MetricDefinitions',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        metricDefs : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'MetricDefinitions';
    }
};



