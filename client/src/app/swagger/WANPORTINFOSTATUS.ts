//imports start WANPORTINFOSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Geniş alan ağlarının bağlantı durumunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı       | Açıklama                    |\n|:----------|:----------------------------|\n| UP        | Geniş Alan Ağı Bağlı        |\n| DOWN      | Geniş Alan Ağı Bağlı Değil  |\n| DISABLED  | Geniş Alan Ağı Engelli      |
*/
export enum WANPORTINFOSTATUS {
    UP = <any>'UP', 
    DOWN = <any>'DOWN', 
    DISABLED = <any>'DISABLED'

}

export var WANPORTINFOSTATUSDef:IModelDef = {
    meta: {
        className: 'WANPORTINFOSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    UP : 1, 
    DOWN : 2, 
    DISABLED : 3

    },
    toString:()=>{
        return 'WANPORTINFOSTATUS';
    }
}

