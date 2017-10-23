//imports start SUPERTOPOLOGYTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Süper Topolojideki birimlerin tipini belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı          | Açıklama           |\n|:-------------|:-------------------|\n| DOMAIN       | Süper Ağ.          |\n| PORT        | Internet Cihazı    |
*/
export enum SUPERTOPOLOGYTYPE {
    DOMAIN = <any>'DOMAIN', 
    PORT = <any>'PORT'

}

export var SUPERTOPOLOGYTYPEDef:IModelDef = {
    meta: {
        className: 'SUPERTOPOLOGYTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    DOMAIN : 1, 
    PORT : 2

    },
    toString:()=>{
        return 'SUPERTOPOLOGYTYPE';
    }
}

