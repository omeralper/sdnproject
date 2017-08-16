//imports start CONTROLLERSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Kontrolcü bağlantı durumunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı     | Açıklama              |\n|:--------|:----------------------|\n| ACTIVE  | Kontrolcü Bağlı       |\n| PASSIVE | Kontrolcü Bağlı Değil |
*/
export enum CONTROLLERSTATUS {
    ACTIVE = <any>'ACTIVE', 
    PASSIVE = <any>'PASSIVE'

}

export var CONTROLLERSTATUSDef:IModelDef = {
    meta: {
        className: 'CONTROLLERSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    ACTIVE : 1, 
    PASSIVE : 2

    },
    toString:()=>{
        return 'CONTROLLERSTATUS';
    }
}

