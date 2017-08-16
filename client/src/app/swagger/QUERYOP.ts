//imports start QUERYOP
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Tüm arama API’larında kullanılacak işlem değeridir.
*/
export enum QUERYOP {
    NOOP = <any>'NOOP', 
    VALUE = <any>'VALUE', 
    AND = <any>'AND', 
    OR = <any>'OR', 
    NOT = <any>'NOT', 
    EXACT_VALUE = <any>'EXACT_VALUE', 
    GREATER = <any>'GREATER', 
    SMALLER = <any>'SMALLER', 
    GREATER_EQUAL = <any>'GREATER_EQUAL', 
    SMALLER_EQUAL = <any>'SMALLER_EQUAL', 
    LIST = <any>'LIST'

}

export var QUERYOPDef:IModelDef = {
    meta: {
        className: 'QUERYOP',
        isObject: false,
        isEnum: true,
    },
    map: {
    NOOP : 1, 
    VALUE : 2, 
    AND : 3, 
    OR : 4, 
    NOT : 5, 
    EXACT_VALUE : 6, 
    GREATER : 7, 
    SMALLER : 8, 
    GREATER_EQUAL : 9, 
    SMALLER_EQUAL : 10, 
    LIST : 11

    },
    toString:()=>{
        return 'QUERYOP';
    }
}

