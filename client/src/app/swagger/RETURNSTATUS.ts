//imports start RETURNSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Tüm API cevaplarında kullanılacak genel durum belirten değerdir.
*/
export enum RETURNSTATUS {
    SUCCESS = <any>'SUCCESS', 
    ERROR = <any>'ERROR', 
    SERVER_ERROR = <any>'SERVER_ERROR', 
    ACCESS_DENIED = <any>'ACCESS_DENIED', 
    ACCESS_LIMITED = <any>'ACCESS_LIMITED', 
    NOT_MODIFIED = <any>'NOT_MODIFIED', 
    NOT_IMPLEMENTED = <any>'NOT_IMPLEMENTED', 
    INVALID_SESSION = <any>'INVALID_SESSION', 
    DEPRECATED = <any>'DEPRECATED'

}

export var RETURNSTATUSDef:IModelDef = {
    meta: {
        className: 'RETURNSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    SUCCESS : 1, 
    ERROR : 2, 
    SERVER_ERROR : 3, 
    ACCESS_DENIED : 4, 
    ACCESS_LIMITED : 5, 
    NOT_MODIFIED : 6, 
    NOT_IMPLEMENTED : 7, 
    INVALID_SESSION : 8, 
    DEPRECATED : 9

    },
    toString:()=>{
        return 'RETURNSTATUS';
    }
}

