//imports start WANDOMAINSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Alan durumunu belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı      | Açıklama                     |\n|:---------|:-----------------------------|\n| FAILED   | Alan ile iletişim başarısız. |\n| ACTIVE   | Alan ile iletişim aktif.     |\n| INACTIVE | Alan ile iletişim pasif.     |
*/
export enum WANDOMAINSTATUS {
    FAILED = <any>'FAILED', 
    ACTIVE = <any>'ACTIVE', 
    INACTIVE = <any>'INACTIVE'

}

export var WANDOMAINSTATUSDef:IModelDef = {
    meta: {
        className: 'WANDOMAINSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    FAILED : 1, 
    ACTIVE : 2, 
    INACTIVE : 3

    },
    toString:()=>{
        return 'WANDOMAINSTATUS';
    }
}

