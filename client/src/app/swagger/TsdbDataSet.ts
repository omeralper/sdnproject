//imports start TsdbDataSet

import {TsdbTagValue,TsdbTagValueDef} from "./TsdbTagValue";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* aynı tag=val değerlerine sahip veri  noktalarının kümesi
*/
export interface TsdbDataSet {
   metric: string;
   tagValues: Array<TsdbTagValue>;
   values: Array<number>;

}


export var TsdbDataSetDef:IModelDef = {
    meta: {
        className: 'TsdbDataSet',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        metric : { type: 'string', required: true }, 

        tagValues : { type: 'Array', required: true }, 

        values : { type: 'Array', required: true }

    },
    toString:()=>{
        return 'TsdbDataSet';
    }
};



