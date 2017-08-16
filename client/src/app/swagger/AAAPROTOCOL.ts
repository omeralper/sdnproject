//imports start AAAPROTOCOL
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* AAA Sunucuları tarafından desteklenen protokol tipini belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı      | Açıklama           |\n|:---------|:-------------------|\n| RADIUS   | RADIUS Protokolü   |\n| LDAP     | LDAP Protokolü     |
*/
export enum AAAPROTOCOL {
    RADIUS = <any>'RADIUS', 
    LDAP = <any>'LDAP'

}

export var AAAPROTOCOLDef:IModelDef = {
    meta: {
        className: 'AAAPROTOCOL',
        isObject: false,
        isEnum: true,
    },
    map: {
    RADIUS : 1, 
    LDAP : 2

    },
    toString:()=>{
        return 'AAAPROTOCOL';
    }
}

