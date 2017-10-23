//imports start CURRENTSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Mevcut durumu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı         | Açıklama              |\n|:------------|:----------------------|\n| INSTALLED   | İşleme Yapıldı        |\n| UNINSTALLED | İşleme Yapılı Değil   |\n| PROCESSING  | İşleme Yapılmakta     |
*/
export enum CURRENTSTATUS {
    INSTALLED = <any>'INSTALLED', 
    UNINSTALLED = <any>'UNINSTALLED', 
    PROCESSING = <any>'PROCESSING'

}

export var CURRENTSTATUSDef:IModelDef = {
    meta: {
        className: 'CURRENTSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    INSTALLED : 1, 
    UNINSTALLED : 2, 
    PROCESSING : 3

    },
    toString:()=>{
        return 'CURRENTSTATUS';
    }
}

