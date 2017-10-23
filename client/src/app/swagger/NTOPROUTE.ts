//imports start NTOPROUTE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* NTOP rotalama durumu.\nDeğerler şunlardır;\n\n| Adı      | Açıklama                          |\n|:---------|:----------------------------------|\n| NONE     | Belirtilmemiş                     |\n| DEACTIVE | NTOP Rotalama Yapılmayacaktır     |\n| ACTIVE   | NTOP Rotalama Yapılacaktır        |
*/
export enum NTOPROUTE {
    NONE = <any>'NONE', 
    ACTIVE = <any>'ACTIVE', 
    DEACTIVE = <any>'DEACTIVE'

}

export var NTOPROUTEDef:IModelDef = {
    meta: {
        className: 'NTOPROUTE',
        isObject: false,
        isEnum: true,
    },
    map: {
    NONE : 1, 
    ACTIVE : 2, 
    DEACTIVE : 3

    },
    toString:()=>{
        return 'NTOPROUTE';
    }
}

