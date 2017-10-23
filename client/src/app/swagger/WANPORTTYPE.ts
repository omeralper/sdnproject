//imports start WANPORTTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Geniş alan ağlarının bağlantı tipini belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı       | Açıklama                    |\n|:----------|:----------------------------|\n| FIBER     | Fiber Kablo                 |\n| COPPER    | Bakır Kablo                 |\n| RADIO     | Radyo Dalgası               |\n| ENCRYPTED | Şifreli                     |
*/
export enum WANPORTTYPE {
    FIBER = <any>'FIBER', 
    COPPER = <any>'COPPER', 
    RADIO = <any>'RADIO', 
    ENCRYPTED = <any>'ENCRYPTED'

}

export var WANPORTTYPEDef:IModelDef = {
    meta: {
        className: 'WANPORTTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    FIBER : 1, 
    COPPER : 2, 
    RADIO : 3, 
    ENCRYPTED : 4

    },
    toString:()=>{
        return 'WANPORTTYPE';
    }
}

