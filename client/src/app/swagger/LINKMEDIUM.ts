//imports start LINKMEDIUM
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* nın veri iletimi için kullandığı ortam tipini belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı      | Açıklama                        |\n|:---------|:--------------------------------|\n| COPPER   | Bakır kablo ile bağlantı.       |\n| OPTICAL  | Fiber optik kablo ile bağlantı. |\n| WIRELESS | Kablosuz iletişim.              |
*/
export enum LINKMEDIUM {
    COPPER = <any>'COPPER', 
    OPTICAL = <any>'OPTICAL', 
    WIRELESS = <any>'WIRELESS'

}

export var LINKMEDIUMDef:IModelDef = {
    meta: {
        className: 'LINKMEDIUM',
        isObject: false,
        isEnum: true,
    },
    map: {
    COPPER : 1, 
    OPTICAL : 2, 
    WIRELESS : 3

    },
    toString:()=>{
        return 'LINKMEDIUM';
    }
}

