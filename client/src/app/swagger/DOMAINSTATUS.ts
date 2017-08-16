//imports start DOMAINSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Uç Birimlerin durumunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı           | Açıklama                        |\n|:--------------|:--------------------------------|\n| UP            | Domain aktif.                   |\n| POWER_SAVER   | Domain güç tasarrufu durumunda. |\n| EMERGENCY     | Domain acil durumda.            |\n| DOWN          | Domain aktif değil.             |
*/
export enum DOMAINSTATUS {
    UP = <any>'UP', 
    POWER_SAVER = <any>'POWER_SAVER', 
    EMERGENCY = <any>'EMERGENCY', 
    DOWN = <any>'DOWN'

}

export var DOMAINSTATUSDef:IModelDef = {
    meta: {
        className: 'DOMAINSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    UP : 1, 
    POWER_SAVER : 2, 
    EMERGENCY : 3, 
    DOWN : 4

    },
    toString:()=>{
        return 'DOMAINSTATUS';
    }
}

