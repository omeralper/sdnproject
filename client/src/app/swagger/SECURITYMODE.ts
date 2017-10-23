//imports start SECURITYMODE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Kontrolcü güvenlik modunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı         | Açıklama                 |\n|:------------|:-------------------------|\n| OFF         | Güvenlik aktif değil.    |\n| TLS         | TLS güvenliği sağlanmış. |
*/
export enum SECURITYMODE {
    OFF = <any>'OFF', 
    TLS = <any>'TLS'

}

export var SECURITYMODEDef:IModelDef = {
    meta: {
        className: 'SECURITYMODE',
        isObject: false,
        isEnum: true,
    },
    map: {
    OFF : 1, 
    TLS : 2

    },
    toString:()=>{
        return 'SECURITYMODE';
    }
}

