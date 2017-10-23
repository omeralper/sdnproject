//imports start TOPOLOGYTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Topoloji tipini belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı             | Açıklama                 |\n|:----------------|:-------------------------|\n| PHYSICAL        | Fiziksel Topoloji        |\n| VIRTUAL         | Sanal Topoloji           |\n| VIRTUAL_REQUEST | Sanal ağ İstek Topolojisi|\n| SUPER           | WAN Topolojisi           |
*/
export enum TOPOLOGYTYPE {
    PHYSICAL = <any>'PHYSICAL', 
    VIRTUAL = <any>'VIRTUAL', 
    VIRTUAL_REQUEST = <any>'VIRTUAL_REQUEST', 
    SUPER = <any>'SUPER'

}

export var TOPOLOGYTYPEDef:IModelDef = {
    meta: {
        className: 'TOPOLOGYTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    PHYSICAL : 1, 
    VIRTUAL : 2, 
    VIRTUAL_REQUEST : 3, 
    SUPER : 4

    },
    toString:()=>{
        return 'TOPOLOGYTYPE';
    }
}

