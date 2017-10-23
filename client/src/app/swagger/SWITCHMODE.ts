//imports start SWITCHMODE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Anahtarlayıcı modunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı         | Açıklama         |\n|:------------|:-----------------|\n| ACTIVE      | Aktif durumda.   |\n| PASSIVE     | Pasif durumda.   |\n| BACKUP      | Yedek durumunda. |\n| MAINTANENCE | Bakımda.         |
*/
export enum SWITCHMODE {
    ACTIVE = <any>'ACTIVE', 
    PASSIVE = <any>'PASSIVE', 
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
    BACKUP : 3, 
    MAINTANENCE : 4

    },
    toString:()=>{
        return 'SWITCHMODE';
    }
}

