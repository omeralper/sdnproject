//imports start HOSTSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Uç Birimlerin durumunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı     | Açıklama              |\n|:--------|:----------------------|\n| LIVE    | Bağlantı aktif.       |\n| GRANTED | Bağlantı kimlik doğrulaması yapılmış. |
*/
export enum HOSTSTATUS {
    LIVE = <any>'LIVE', 
    GRANTED = <any>'GRANTED'

}

export var HOSTSTATUSDef:IModelDef = {
    meta: {
        className: 'HOSTSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    LIVE : 1, 
    GRANTED : 2

    },
    toString:()=>{
        return 'HOSTSTATUS';
    }
}

