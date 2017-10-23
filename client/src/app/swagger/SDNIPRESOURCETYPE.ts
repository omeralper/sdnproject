//imports start SDNIPRESOURCETYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Politikaların etkinlik alanlarını tanımlar.\nDeğerler şunlardır;\n\n| Adı       | Açıklama    |\n|:----------|:------------|\n| GLOBAL    | Genel tanım |
*/
export enum SDNIPRESOURCETYPE {
    GLOBAL = <any>'GLOBAL'

}

export var SDNIPRESOURCETYPEDef:IModelDef = {
    meta: {
        className: 'SDNIPRESOURCETYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    GLOBAL : 1

    },
    toString:()=>{
        return 'SDNIPRESOURCETYPE';
    }
}

