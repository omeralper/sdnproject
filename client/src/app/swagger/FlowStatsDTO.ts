//imports start FlowStatsDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {FlowStats,FlowStatsDef} from "./FlowStats";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FlowStatsDTO extends BaseDTO {
   srcIP: string;
   protocol: string;
   dstPort: number;
   port: number;
   
    /**
    * standart internet protocol/port çiftlerine verilen adlar
    */
    service: string;
   dstIP: string;
   srcPort: number;
   upStats: Array<FlowStats>;
   device: string;
   downStats: Array<FlowStats>;

}


export var FlowStatsDTODef:IModelDef = {
    meta: {
        className: 'FlowStatsDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        srcIP : { type: 'string', required: true }, 

        protocol : { type: 'string', required: true }, 

        dstPort : { type: 'number', required: true }, 

        port : { type: 'number', required: true }, 

        service : { type: 'string', required: true }, 

        dstIP : { type: 'string', required: true }, 

        srcPort : { type: 'number', required: true }, 

        upStats : { type: 'Array', required: true }, 

        device : { type: 'string', required: true }, 

        downStats : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'FlowStatsDTO';
    }
};



