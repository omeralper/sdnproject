//imports start SWITCHMODE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Anahtarlayıcı modunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı         | Açıklama         |\n|:------------|:-----------------|\n| ACTIVE      | Aktif durumda.   |\n| PASSIVE     | Pasif durumda.   |\n| SLAVE       | Yamak durumunda. |\n| BACKUP      | Yedek durumunda. |\n| MAINTANENCE | Bakımda.         |
*/
export enum SWITCHMODE {
    ACTIVE = <any>'ACTIVE', 
    PASSIVE = <any>'PASSIVE', 
    SLAVE = <any>'SLAVE', 
    BACKUP = <any>'BACKUP', 
    MAINTANENCE = <any>'MAINTANENCE'

}

export var SWITCHMODEDef:IModelDef = {
    meta: {
        className: 'SWITCHMODE',
        isObject: false,
        isEnum: true,
    },
    map: {
    ACTIVE : 1, 
    PASSIVE : 2, 
    SLAVE : 3, 
    BACKUP : 4, 
    MAINTANENCE : 5

    },
    toString:()=>{
        return 'SWITCHMODE';
    }
}

