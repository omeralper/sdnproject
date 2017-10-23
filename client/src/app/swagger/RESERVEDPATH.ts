//imports start RESERVEDPATH
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Patika rezervasyonu özelliği.\nDeğerler şunlardır;\n\n| Adı      | Açıklama                           |\n|:---------|:-----------------------------------|\n| NONE     | Belirtilmemiş                      |\n| DEACTIVE | Patika rezervasyonu yapılmayacaktır|\n| ACTIVE   | Patika rezervasyonu yapılacaktır   |
*/
export enum RESERVEDPATH {
    NONE = <any>'NONE', 
    ACTIVE = <any>'ACTIVE', 
    DEACTIVE = <any>'DEACTIVE'

}

export var RESERVEDPATHDef:IModelDef = {
    meta: {
        className: 'RESERVEDPATH',
        isObject: false,
        isEnum: true,
    },
    map: {
    NONE : 1, 
    ACTIVE : 2, 
    DEACTIVE : 3

    },
    toString:()=>{
        return 'RESERVEDPATH';
    }
}

