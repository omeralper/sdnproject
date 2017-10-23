//imports start SDNIPDEFINEDSETTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Set içindeki elemanların tipini tanımlar.\nDeğerler şunlardır;\n\n| Adı       | Açıklama                      |\n|:----------|:------------------------------|\n| AS_PATH   | Set type for AS path          |\n| NEIGHBOR  | Set type for neighbor         |\n| PREFIX    | Set type for prefix           |
*/
export enum SDNIPDEFINEDSETTYPE {
    AS_PATH = <any>'AS_PATH', 
    NEIGHBOR = <any>'NEIGHBOR', 
    PREFIX = <any>'PREFIX'

}

export var SDNIPDEFINEDSETTYPEDef:IModelDef = {
    meta: {
        className: 'SDNIPDEFINEDSETTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    AS_PATH : 1, 
    NEIGHBOR : 2, 
    PREFIX : 3

    },
    toString:()=>{
        return 'SDNIPDEFINEDSETTYPE';
    }
}

