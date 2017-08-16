//imports start TRANSPORTPROTOCOL
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Internet transport protokollerinden biri
*/
export enum TRANSPORTPROTOCOL {
    TCP = <any>'TCP', 
    UDP = <any>'UDP'

}

export var TRANSPORTPROTOCOLDef:IModelDef = {
    meta: {
        className: 'TRANSPORTPROTOCOL',
        isObject: false,
        isEnum: true,
    },
    map: {
    TCP : 1, 
    UDP : 2

    },
    toString:()=>{
        return 'TRANSPORTPROTOCOL';
    }
}

