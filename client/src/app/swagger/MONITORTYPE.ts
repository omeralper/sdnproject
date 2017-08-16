//imports start MONITORTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Gösterge türünü belirtir. Değerler şunlardır:\n| Adı             | Açıklama                   |\n|-----------------|----------------------------|\n| COUNTER         | Gösterge Türü = counter    |\n| GAUGE           | Gösterge Türü = gauge      |
*/
export enum MONITORTYPE {
    COUNTER = <any>'COUNTER', 
    GAUGE = <any>'GAUGE'

}

export var MONITORTYPEDef:IModelDef = {
    meta: {
        className: 'MONITORTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    COUNTER : 1, 
    GAUGE : 2

    },
    toString:()=>{
        return 'MONITORTYPE';
    }
}

