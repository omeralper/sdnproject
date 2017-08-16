//imports start CONTROLLERNODETYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Düğümün tipini belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı                 | Açıklama        |\n|:--------------------|:----------------|\n| CONTROLLER          | Kontrolcü       |\n| NETWORK_MANAGEMENT  | Ağ Yönetimi     |
*/
export enum CONTROLLERNODETYPE {
    CONTROLLER = <any>'CONTROLLER', 
    NETWORK_MANAGEMENT = <any>'NETWORK_MANAGEMENT'

}

export var CONTROLLERNODETYPEDef:IModelDef = {
    meta: {
        className: 'CONTROLLERNODETYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    CONTROLLER : 1, 
    NETWORK_MANAGEMENT : 2

    },
    toString:()=>{
        return 'CONTROLLERNODETYPE';
    }
}

