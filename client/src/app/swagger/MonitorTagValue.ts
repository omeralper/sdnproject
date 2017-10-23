//imports start MonitorTagValue



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Metrik veri noktalarında olması gereken tag=val
*/
export interface MonitorTagValue {
   tag: string;
   val: string;

}


export var MonitorTagValueDef:IModelDef = {
    meta: {
        className: 'MonitorTagValue',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        tag : { type: 'string', required: true }, 

        val : { type: 'string', required: true }

    },
    toString:()=>{
        return 'MonitorTagValue';
    }
};



