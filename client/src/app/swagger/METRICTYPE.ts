//imports start METRICTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* metrik değerinin nasıl bir sayı olduğunu belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı      | Açıklama       |\n|:---------|:---------------|\n| LONG     | tamsayı        |\n| DOUBLE   | ondalıklı sayı |
*/
export enum METRICTYPE {
    LONG = <any>'LONG', 
    DOUBLE = <any>'DOUBLE'

}

export var METRICTYPEDef:IModelDef = {
    meta: {
        className: 'METRICTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    LONG : 1, 
    DOUBLE : 2

    },
    toString:()=>{
        return 'METRICTYPE';
    }
}

