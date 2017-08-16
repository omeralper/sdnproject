//imports start SDNIPROUTEACTION
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Eşleşme durumunda ne yapılacağını tanımlar.\nDeğerler şunlardır;\n\n| Adı       | Açıklama  |\n|:----------|:----------|\n| ACCEPT    | Kabul et  |\n| REJECT    | Reddet    |
*/
export enum SDNIPROUTEACTION {
    ACCEPT = <any>'ACCEPT', 
    REJECT = <any>'REJECT'

}

export var SDNIPROUTEACTIONDef:IModelDef = {
    meta: {
        className: 'SDNIPROUTEACTION',
        isObject: false,
        isEnum: true,
    },
    map: {
    ACCEPT : 1, 
    REJECT : 2

    },
    toString:()=>{
        return 'SDNIPROUTEACTION';
    }
}

