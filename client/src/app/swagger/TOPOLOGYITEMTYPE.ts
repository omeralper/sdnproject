//imports start TOPOLOGYITEMTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Topoloji öğe tipini belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı      | Açıklama          |\n|:---------|:------------------|\n| TOPOLOGY | Topoloji Tanımı   |\n| SWITCH   | Anahtarlayıcı     |\n| LINK     | Bağlantı          |\n| HOST     | Uç Birim Cihazı   |
*/
export enum TOPOLOGYITEMTYPE {
    TOPOLOGY = <any>'TOPOLOGY', 
    SWITCH = <any>'SWITCH', 
    LINK = <any>'LINK', 
    HOST = <any>'HOST'

}

export var TOPOLOGYITEMTYPEDef:IModelDef = {
    meta: {
        className: 'TOPOLOGYITEMTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    TOPOLOGY : 1, 
    SWITCH : 2, 
    LINK : 3, 
    HOST : 4

    },
    toString:()=>{
        return 'TOPOLOGYITEMTYPE';
    }
}

