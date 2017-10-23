//imports start UNIQUENESSTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Sorgulama cevaplarında kullanılacak değerdir.
*/
export enum UNIQUENESSTYPE {
    UNIQUE = <any>'UNIQUE', 
    NON_UNIQUE = <any>'NON_UNIQUE', 
    UNKNOWN = <any>'UNKNOWN'

}

export var UNIQUENESSTYPEDef:IModelDef = {
    meta: {
        className: 'UNIQUENESSTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    UNIQUE : 1, 
    NON_UNIQUE : 2, 
    UNKNOWN : 3

    },
    toString:()=>{
        return 'UNIQUENESSTYPE';
    }
}

