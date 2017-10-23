//imports start NACSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Son kullanıcı nesnelerinin genel durumunu belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı          | Açıklama                  |\n|:---------    |:--------------------------|\n| ACTIVE       | Aktif nesne               |\n| PASSIVE      | Pasif nesne               |
*/
export enum NACSTATUS {
    ACTIVE = <any>'ACTIVE', 
    PASSIVE = <any>'PASSIVE'

}

export var NACSTATUSDef:IModelDef = {
    meta: {
        className: 'NACSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    ACTIVE : 1, 
    PASSIVE : 2

    },
    toString:()=>{
        return 'NACSTATUS';
    }
}

