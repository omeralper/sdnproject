//imports start NETWORKDEVICESTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Anahtarlayıcı durumunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı      | Açıklama                         |\n|:---------|:---------------------------------|\n| DOWN     | Ağ Cihazı çökmüş durumda         |\n| UP       | Ağ Cihazı problemsiz durumda     |
*/
export enum NETWORKDEVICESTATUS {
    DOWN = <any>'DOWN', 
    UP = <any>'UP'

}

export var NETWORKDEVICESTATUSDef:IModelDef = {
    meta: {
        className: 'NETWORKDEVICESTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    DOWN : 1, 
    UP : 2

    },
    toString:()=>{
        return 'NETWORKDEVICESTATUS';
    }
}

