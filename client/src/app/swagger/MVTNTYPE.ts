//imports start MVTNTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* MVTN taleplerinin değiştirilebilirlik durum bilgisi
*/
export enum MVTNTYPE {
    DYNAMIC = <any>'DYNAMIC', 
    STATIC = <any>'STATIC'

}

export var MVTNTYPEDef:IModelDef = {
    meta: {
        className: 'MVTNTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    DYNAMIC : 1, 
    STATIC : 2

    },
    toString:()=>{
        return 'MVTNTYPE';
    }
}

