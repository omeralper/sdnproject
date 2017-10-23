//imports start NACDEVICESTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Cihaz nesnelerinin genel durumunu belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı          | Açıklama                  |\n|:---------    |:--------------------------|\n| ACTIVE       | Aktif cihaz               |\n| QUARANTINED  | Karantinaya alınmış cihaz |
*/
export enum NACDEVICESTATUS {
    ACTIVE = <any>'ACTIVE', 
    QUARANTINED = <any>'QUARANTINED'

}

export var NACDEVICESTATUSDef:IModelDef = {
    meta: {
        className: 'NACDEVICESTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    ACTIVE : 1, 
    QUARANTINED : 2

    },
    toString:()=>{
        return 'NACDEVICESTATUS';
    }
}

