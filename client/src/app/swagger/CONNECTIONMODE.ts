//imports start CONNECTIONMODE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Kontrolcü bağlantı tipini belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı     | Açıklama          |\n|:--------|:------------------|\n| INBAND  | INBAND Modu       |\n| OUTBAND | OUTBAND Modu      |
*/
export enum CONNECTIONMODE {
    INBAND = <any>'INBAND', 
    OUTBAND = <any>'OUTBAND'

}

export var CONNECTIONMODEDef:IModelDef = {
    meta: {
        className: 'CONNECTIONMODE',
        isObject: false,
        isEnum: true,
    },
    map: {
    INBAND : 1, 
    OUTBAND : 2

    },
    toString:()=>{
        return 'CONNECTIONMODE';
    }
}

