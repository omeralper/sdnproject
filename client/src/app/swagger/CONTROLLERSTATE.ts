//imports start CONTROLLERSTATE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Kontrolcü durumunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı         | Açıklama                 |\n|:------------|:-------------------------|\n| ACTIVE      | Kontrolcü aktif.         |\n| READY       | Kontrolcü hazır.         |\n| GREEN_MODE  | Kontrolcü kapatılabilir. |\n| INACTIVE    | Kontrolcü aktif değil    |
*/
export enum CONTROLLERSTATE {
    ACTIVE = <any>'ACTIVE', 
    READY = <any>'READY', 
    GREEN_MODE = <any>'GREEN_MODE', 
    INACTIVE = <any>'INACTIVE'

}

export var CONTROLLERSTATEDef:IModelDef = {
    meta: {
        className: 'CONTROLLERSTATE',
        isObject: false,
        isEnum: true,
    },
    map: {
    ACTIVE : 1, 
    READY : 2, 
    GREEN_MODE : 3, 
    INACTIVE : 4

    },
    toString:()=>{
        return 'CONTROLLERSTATE';
    }
}

