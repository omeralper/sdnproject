//imports start PROCESSINGSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* İşleme durumunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı         | Açıklama               |\n|:------------|:-----------------------|\n| FAILED      | Özellik Başarılı Değil |\n| SUCCESS     | Özellik Başarılı       |\n| NONE        | Özellik Mevcut Değil   |
*/
export enum PROCESSINGSTATUS {
    FAILED = <any>'FAILED', 
    SUCCESS = <any>'SUCCESS', 
    NONE = <any>'NONE'

}

export var PROCESSINGSTATUSDef:IModelDef = {
    meta: {
        className: 'PROCESSINGSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    FAILED : 1, 
    SUCCESS : 2, 
    NONE : 3

    },
    toString:()=>{
        return 'PROCESSINGSTATUS';
    }
}

