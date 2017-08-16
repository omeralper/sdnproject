//imports start AAASTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* AAA nesnelerinin genel durumunu belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı      | Açıklama          |\n|:---------|:------------------|\n| ACTIVE   | Aktif AAA nesnesi |\n| PASSIVE  | Pasif AAA nesnesi |
*/
export enum AAASTATUS {
    ACTIVE = <any>'ACTIVE', 
    PASSIVE = <any>'PASSIVE'

}

export var AAASTATUSDef:IModelDef = {
    meta: {
        className: 'AAASTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    ACTIVE : 1, 
    PASSIVE : 2

    },
    toString:()=>{
        return 'AAASTATUS';
    }
}

