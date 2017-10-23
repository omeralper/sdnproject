//imports start CONFIGVALUETYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Konfigürasyon değer tipini\nbelirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı      | Açıklama             |\n|:---------|:---------------------|\n| STRING   | String Tipi          |\n| BYTE     | Byte Tipi            |\n| INTEGER  | Integer Tipi         |\n| LONG     | Long Tipi            |\n| FLOAT    | Float Tipi           |\n| DOUBLE   | Double Tipi          |\n| BOOLEAN  | Boolean Tipi         |
*/
export enum CONFIGVALUETYPE {
    STRING = <any>'STRING', 
    BYTE = <any>'BYTE', 
    INTEGER = <any>'INTEGER', 
    LONG = <any>'LONG', 
    FLOAT = <any>'FLOAT', 
    DOUBLE = <any>'DOUBLE', 
    BOOLEAN = <any>'BOOLEAN'

}

export var CONFIGVALUETYPEDef:IModelDef = {
    meta: {
        className: 'CONFIGVALUETYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    STRING : 1, 
    BYTE : 2, 
    INTEGER : 3, 
    LONG : 4, 
    FLOAT : 5, 
    DOUBLE : 6, 
    BOOLEAN : 7

    },
    toString:()=>{
        return 'CONFIGVALUETYPE';
    }
}

