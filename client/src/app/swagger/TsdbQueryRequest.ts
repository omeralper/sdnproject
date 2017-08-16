//imports start TsdbQueryRequest

import {DownSampling,DownSamplingDef} from "./DownSampling";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {TsdbAggregator,TsdbAggregatorDef} from "./TsdbAggregator";
import {TsdbTagValue,TsdbTagValueDef} from "./TsdbTagValue";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface TsdbQueryRequest extends GenericRequest {
   maxResult: number;
   downsampling: DownSampling;
   aggregator: TsdbAggregator;
   metrics: Array<string>;
   
    /**
    * 1970'ten beri kaç milisaniye
    */
    beginTime: number;
   
    /**
    * 1970'ten beri kaç milisaniye
    */
    endTime: number;
   tagValues: Array<TsdbTagValue>;

}


export var TsdbQueryRequestDef:IModelDef = {
    meta: {
        className: 'TsdbQueryRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        maxResult : { type: 'number', required: true }, 

        downsampling : { type: DownSamplingDef, required: true }, 

        aggregator : { type: TsdbAggregatorDef, required: true }, 

        metrics : { type: 'Array', required: true }, 

        beginTime : { type: 'number', required: true }, 

        endTime : { type: 'number', required: true }, 

        tagValues : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'TsdbQueryRequest';
    }
};



