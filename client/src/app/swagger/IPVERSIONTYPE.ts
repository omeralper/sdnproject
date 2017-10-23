//imports start IPVERSIONTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* IP versiyon türünü belirtir. Değerler şunlardır:\n| Adı             | Açıklama                   |\n|-----------------|----------------------------|\n| IPV4            | Ip versiyonu = ipv4        |\n| IPV6            | Ip versiyonu = ipv6        |
*/
export enum IPVERSIONTYPE {
    IPV4 = <any>'IPV4', 
    IPV6 = <any>'IPV6'

}

export var IPVERSIONTYPEDef:IModelDef = {
    meta: {
        className: 'IPVERSIONTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    IPV4 : 1, 
    IPV6 : 2

    },
    toString:()=>{
        return 'IPVERSIONTYPE';
    }
}

