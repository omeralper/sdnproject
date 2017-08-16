//imports start OPTIONTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* DhcpOption türünü belirtir. Değerler şunlardır:\n| Adı             | Açıklama                             |\n|-----------------|--------------------------------------|\n| NUMBER          | DhcpOption türü = Integer veya Long  |\n| STRING          | DhcpOption türü = String             |\n| IP_ADDRESS      | DhcpOption türü = Ip Addresi         |\n| DATE_TIME       | DhcpOption türü =  tarih / zaman     |
*/
export enum OPTIONTYPE {
    NUMBER = <any>'NUMBER', 
    STRING = <any>'STRING', 
    IP_ADDRESS = <any>'IP_ADDRESS', 
    DATE_TIME = <any>'DATE_TIME'

}

export var OPTIONTYPEDef:IModelDef = {
    meta: {
        className: 'OPTIONTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    NUMBER : 1, 
    STRING : 2, 
    IP_ADDRESS : 3, 
    DATE_TIME : 4

    },
    toString:()=>{
        return 'OPTIONTYPE';
    }
}

