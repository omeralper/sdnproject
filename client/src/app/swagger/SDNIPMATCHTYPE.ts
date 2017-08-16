//imports start SDNIPMATCHTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Eşleşme durumunu tanımlar.\nDeğerler şunlardır;\n\n| Adı    | Açıklama       |\n|:-------|:---------------|\n| ANY    | Herhangi biri  |\n| ALL    | Hepsi          |\n| INVERT | Ters           |
*/
export enum SDNIPMATCHTYPE {
    ANY = <any>'ANY', 
    ALL = <any>'ALL', 
    INVERT = <any>'INVERT'

}

export var SDNIPMATCHTYPEDef:IModelDef = {
    meta: {
        className: 'SDNIPMATCHTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    ANY : 1, 
    ALL : 2, 
    INVERT : 3

    },
    toString:()=>{
        return 'SDNIPMATCHTYPE';
    }
}

