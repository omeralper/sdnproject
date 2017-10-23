//imports start LINKTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Link tipini belirten ENUM değeridir. Değerler şunlardır;\n\n| Adı             | Açıklama                 |\n|-----------------|--------------------------|\n| COPPER          | Bakır kablo              |\n| FIBER           | Fiber-optik kablo        |\n| PACKET          |                          |\n| ODUCLT          |                          |\n| OCH             |                          |\n| OMS             |                          |\n| VIRTUAL         |                          |\n| OTU             |                          |\n| SECURE          |                          |
*/
export enum LINKTYPE {
    COPPER = <any>'COPPER', 
    FIBER = <any>'FIBER', 
    PACKET = <any>'PACKET', 
    ODUCLT = <any>'ODUCLT', 
    OCH = <any>'OCH', 
    OMS = <any>'OMS', 
    VIRTUAL = <any>'VIRTUAL', 
    OTU = <any>'OTU', 
    SECURE = <any>'SECURE'

}

export var LINKTYPEDef:IModelDef = {
    meta: {
        className: 'LINKTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    COPPER : 1, 
    FIBER : 2, 
    PACKET : 3, 
    ODUCLT : 4, 
    OCH : 5, 
    OMS : 6, 
    VIRTUAL : 7, 
    OTU : 8, 
    SECURE : 9

    },
    toString:()=>{
        return 'LINKTYPE';
    }
}

