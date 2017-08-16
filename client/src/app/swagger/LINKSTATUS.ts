//imports start LINKSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Bağlantı durumunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı     | Açıklama              |\n|:--------|:----------------------|\n| DOWN    | Bağlantı arızalı.     |\n| BLOCKED | Bağlantı engellenmiş. |\n| LIVE    | Bağlantı aktif.       |\n| LEGACY  | Bağlantı geleneksel.  |\n| INDIRECT| Dolaylı bağlantı.     |
*/
export enum LINKSTATUS {
    DOWN = <any>'DOWN', 
    BLOCKED = <any>'BLOCKED', 
    LIVE = <any>'LIVE', 
    LEGACY = <any>'LEGACY', 
    INDIRECT = <any>'INDIRECT'

}

export var LINKSTATUSDef:IModelDef = {
    meta: {
        className: 'LINKSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    DOWN : 1, 
    BLOCKED : 2, 
    LIVE : 3, 
    LEGACY : 4, 
    INDIRECT : 5

    },
    toString:()=>{
        return 'LINKSTATUS';
    }
}

