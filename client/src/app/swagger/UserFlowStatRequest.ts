//imports start UserFlowStatRequest

import {FlowStatAggregator,FlowStatAggregatorDef} from "./FlowStatAggregator";
import {FlowStatFilter,FlowStatFilterDef} from "./FlowStatFilter";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface UserFlowStatRequest extends GenericRequest {
   downsamplingPeriod: number;
   filter?: FlowStatFilter;
   aggregator?: Array<FlowStatAggregator>;
   
    /**
    * Eğer kimliği doğrulanmış bir kullanıcı değilse (false), IP adresi kullanıcı kimliği yerine geçer
    */
    knownUser: boolean;
   responseLimit: number;
   beginTime: number;
   endTime: number;
   
    /**
    * Eğer knownUser=false ise, IP adresi kullanıcı kimliği yerine geçer
    */
    user: number;

}


export var UserFlowStatRequestDef:IModelDef = {
    meta: {
        className: 'UserFlowStatRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        downsamplingPeriod : { type: 'number', required: true }, 

        filter : { type: FlowStatFilterDef }, 

        aggregator : { type: 'Array' }, 

        knownUser : { type: 'boolean', required: true }, 

        responseLimit : { type: 'number', required: true }, 

        beginTime : { type: 'number', required: true }, 

        endTime : { type: 'number', required: true }, 

        user : { type: 'number', required: true }

    }),
    toString:()=>{
        return 'UserFlowStatRequest';
    }
};



