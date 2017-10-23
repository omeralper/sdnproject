//imports start PATHSTATE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Patika durumunu belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı       | Açıklama                      |\n|:---------|:------------------------------|\n| INSTALL_REQ    | Intent tipi patika (proaktif)   |\n| COMPILING      | Flow tipi patika (reaktif)      |\n| INSTALLING     | Flow tipi patika (reaktif)      |\n| INSTALLED      | Flow tipi patika (reaktif)      |\n| RECOMPILING    | Flow tipi patika (reaktif)      |\n| WITHDRAW_REQ   | Flow tipi patika (reaktif)      |\n| WITHDRAWN      | Flow tipi patika (reaktif)      |\n| FAILED         | Flow tipi patika (reaktif)      |\n| CORRUPT        | Flow tipi patika (reaktif)      |\n| PURGE_REQ      | Flow tipi patika (reaktif)      |
*/
export enum PATHSTATE {
    INSTALL_REQ = <any>'INSTALL_REQ', 
    COMPILING = <any>'COMPILING', 
    INSTALLING = <any>'INSTALLING', 
    INSTALLED = <any>'INSTALLED', 
    RECOMPILING = <any>'RECOMPILING', 
    WITHDRAW_REQ = <any>'WITHDRAW_REQ', 
    WITHDRAWN = <any>'WITHDRAWN', 
    FAILED = <any>'FAILED', 
    CORRUPT = <any>'CORRUPT', 
    PURGE_REQ = <any>'PURGE_REQ'

}

export var PATHSTATEDef:IModelDef = {
    meta: {
        className: 'PATHSTATE',
        isObject: false,
        isEnum: true,
    },
    map: {
    INSTALL_REQ : 1, 
    COMPILING : 2, 
    INSTALLING : 3, 
    INSTALLED : 4, 
    RECOMPILING : 5, 
    WITHDRAW_REQ : 6, 
    WITHDRAWN : 7, 
    FAILED : 8, 
    CORRUPT : 9, 
    PURGE_REQ : 10

    },
    toString:()=>{
        return 'PATHSTATE';
    }
}

