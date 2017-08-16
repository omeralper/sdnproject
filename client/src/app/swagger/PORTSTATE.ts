//imports start PORTSTATE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Anahtarlayıcı Portunun kontrolcü tarafından yapılandırılamayan durum belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı          | Açıklama                                     |\n|:-------------|:---------------------------------------------|\n| LINK_DOWN    | Fiziksel link kopmuş.                        |\n| BLOCKED      | Port engellenmiş.                            |\n| LIVE         | Port aktif.                                  |\n| STP_LISTEN   | Stp aktif.                                   |
*/
export enum PORTSTATE {
    LINK_DOWN = <any>'LINK_DOWN', 
    BLOCKED = <any>'BLOCKED', 
    LIVE = <any>'LIVE', 
    STP_LISTEN = <any>'STP_LISTEN'

}

export var PORTSTATEDef:IModelDef = {
    meta: {
        className: 'PORTSTATE',
        isObject: false,
        isEnum: true,
    },
    map: {
    LINK_DOWN : 1, 
    BLOCKED : 2, 
    LIVE : 3, 
    STP_LISTEN : 4

    },
    toString:()=>{
        return 'PORTSTATE';
    }
}

