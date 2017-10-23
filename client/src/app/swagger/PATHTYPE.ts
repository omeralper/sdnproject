//imports start PATHTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Patika tipini belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı      | Açıklama                      |\n|:---------|:------------------------------|\n| INTENT   | Intent tipi patika (proaktif) |\n| FLOW     | Flow tipi patika (reaktif)    |
*/
export enum PATHTYPE {
    INTENT = <any>'INTENT', 
    FLOW = <any>'FLOW'

}

export var PATHTYPEDef:IModelDef = {
    meta: {
        className: 'PATHTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    INTENT : 1, 
    FLOW : 2

    },
    toString:()=>{
        return 'PATHTYPE';
    }
}

