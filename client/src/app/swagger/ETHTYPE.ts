//imports start ETHTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Temel IP protokol tipini belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı   | Açıklama          |\n|:------|:------------------|\n| TCP   | TCP Protokolü     |\n| UDP   | UDP Protokolü     |\n| ANY   | Herhangi Protokol |
*/
export enum ETHTYPE {
    TCP = <any>'TCP', 
    UDP = <any>'UDP', 
    ANY = <any>'ANY'

}

export var ETHTYPEDef:IModelDef = {
    meta: {
        className: 'ETHTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    TCP : 1, 
    UDP : 2, 
    ANY : 3

    },
    toString:()=>{
        return 'ETHTYPE';
    }
}

