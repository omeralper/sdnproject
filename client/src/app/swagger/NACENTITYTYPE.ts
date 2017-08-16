//imports start NACENTITYTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Son kullanıcıların tipini belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı      | Açıklama           |\n|:---------|:-------------------|\n| GUEST    | Misafir Kullanıcı  |\n| STAFF    | Personel Kullanıcı |
*/
export enum NACENTITYTYPE {
    GUEST = <any>'GUEST', 
    STAFF = <any>'STAFF'

}

export var NACENTITYTYPEDef:IModelDef = {
    meta: {
        className: 'NACENTITYTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    GUEST : 1, 
    STAFF : 2

    },
    toString:()=>{
        return 'NACENTITYTYPE';
    }
}

