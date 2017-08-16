//imports start FlowStatAggregator
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Akış istatistiklerini bütün alanlarına bakarak değil değil de sadece belirtilen alanlara bakarak gruplandırmaya yarar
*/
export enum FlowStatAggregator {
    srcIP = <any>'srcIP', 
    dstIP = <any>'dstIP', 
    protocol = <any>'protocol', 
    srcPort = <any>'srcPort', 
    dstPort = <any>'dstPort'

}

export var FlowStatAggregatorDef:IModelDef = {
    meta: {
        className: 'FlowStatAggregator',
        isObject: false,
        isEnum: true,
    },
    map: {
    srcIP : 1, 
    dstIP : 2, 
    protocol : 3, 
    srcPort : 4, 
    dstPort : 5

    },
    toString:()=>{
        return 'FlowStatAggregator';
    }
}

