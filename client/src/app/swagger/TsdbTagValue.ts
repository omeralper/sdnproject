//imports start TsdbTagValue



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Metrik veri noktalarında olması gereken tag=val
*/
export interface TsdbTagValue {
   tag: string;
   val: string;

}


export var TsdbTagValueDef:IModelDef = {
    meta: {
        className: 'TsdbTagValue',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        tag : { type: 'string', required: true }, 

        val : { type: 'string', required: true }

    },
    toString:()=>{
        return 'TsdbTagValue';
    }
};



