//imports start OFFLINEMODE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Kontrolcünün offline tipini belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı        | Açıklama        |\n|:-----------|:----------------|\n| SECURE     | SECURE Modu     |\n| STANDALONE | STANDALONE Modu |
*/
export enum OFFLINEMODE {
    SECURE = <any>'SECURE', 
    STANDALONE = <any>'STANDALONE'

}

export var OFFLINEMODEDef:IModelDef = {
    meta: {
        className: 'OFFLINEMODE',
        isObject: false,
        isEnum: true,
    },
    map: {
    SECURE : 1, 
    STANDALONE : 2

    },
    toString:()=>{
        return 'OFFLINEMODE';
    }
}

