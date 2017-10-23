//imports start ONOSPORTTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* PortType nesnesine karşılık gelen ENUM değerleri.\nDeğerler şunlardır;\n\n| Adı      | Açıklama                               |\n|:---------|:---------------------------------------|\n| UNKNOWN  | Bilinmeyen port tipi                   |\n| COPPER   | Bakır tabanlı port                     |\n| FIBER    | Optik fiber tabanlı port               |\n| PACKET   | Optik fiber tabanlı paket portu        |\n| ODUCLT   | Optik fiber tabanlı T-port (tributary) |\n| OCH      | Optik fiber tabanlı L-port (line-side) |\n| OMS      | Optik fiber tabanlı W-port (WDM)       |\n| VIRTUAL  | Sanal port                             |\n| OTU      | Optik fiber tabanlı OTN portu          |
*/
export enum ONOSPORTTYPE {
    UNKNOWN = <any>'UNKNOWN', 
    COPPER = <any>'COPPER', 
    FIBER = <any>'FIBER', 
    PACKET = <any>'PACKET', 
    ODUCLT = <any>'ODUCLT', 
    OCH = <any>'OCH', 
    OMS = <any>'OMS', 
    VIRTUAL = <any>'VIRTUAL', 
    OTU = <any>'OTU'

}

export var ONOSPORTTYPEDef:IModelDef = {
    meta: {
        className: 'ONOSPORTTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    UNKNOWN : 1, 
    COPPER : 2, 
    FIBER : 3, 
    PACKET : 4, 
    ODUCLT : 5, 
    OCH : 6, 
    OMS : 7, 
    VIRTUAL : 8, 
    OTU : 9

    },
    toString:()=>{
        return 'ONOSPORTTYPE';
    }
}

