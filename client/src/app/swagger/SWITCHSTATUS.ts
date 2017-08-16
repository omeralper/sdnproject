//imports start SWITCHSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Anahtarlayıcı durumunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı         | Açıklama                               |\n|:------------|:---------------------------------------|\n| DOWN        | Anahtarlayıcı çökmüş durumda           |\n| UP          | Anahtarlayıcı problemsiz durumda       |\n| POWER_SAVER | Anahtarlayıcı enerji tasarrufu modunda |\n| EMERGENCY   | Anahtarlayıcı acil durumda             |
*/
export enum SWITCHSTATUS {
    DOWN = <any>'DOWN', 
    UP = <any>'UP', 
    POWER_SAVER = <any>'POWER_SAVER', 
    EMERGENCY = <any>'EMERGENCY'

}

export var SWITCHSTATUSDef:IModelDef = {
    meta: {
        className: 'SWITCHSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    DOWN : 1, 
    UP : 2, 
    POWER_SAVER : 3, 
    EMERGENCY : 4

    },
    toString:()=>{
        return 'SWITCHSTATUS';
    }
}

