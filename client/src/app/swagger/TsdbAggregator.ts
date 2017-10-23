//imports start TsdbAggregator
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* TSDB sorgularında bir grup veri noktasını birleştirme yöntemi
*/
export enum TsdbAggregator {
    none = <any>'none', 
    sum = <any>'sum', 
    avg = <any>'avg', 
    min = <any>'min', 
    max = <any>'max', 
    count = <any>'count'

}

export var TsdbAggregatorDef:IModelDef = {
    meta: {
        className: 'TsdbAggregator',
        isObject: false,
        isEnum: true,
    },
    map: {
    none : 1, 
    sum : 2, 
    avg : 3, 
    min : 4, 
    max : 5, 
    count : 6

    },
    toString:()=>{
        return 'TsdbAggregator';
    }
}

