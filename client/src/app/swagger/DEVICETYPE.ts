//imports start DEVICETYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Cihaz tipini belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı             | Açıklama                       |\n|:----------------|:-------------------------------|\n| PHISICAL_SWITCH | Fiziksel Anahtarlayıcı.        |\n| VIRTUAL_SWITCH  | Sanal Anahtarlayıcı.           |\n| LEGACY_SWITCH   | Geleneksel Anahtarlayıcı.      |\n| ROUTER          | Yönlendirici.                  |\n| MODEM           | Modem.                         |\n| ACCESS_POINT    | Erişim Noktası.                |\n| IP_PHONE        | IP Telefon                     |\n| APPLIANCE       | Ağ Uygulaması (firewall, vs..) |\n| UNKNOWN         | Bilinmiyor.                    |
*/
export enum DEVICETYPE {
    PHISICAL_SWITCH = <any>'PHISICAL_SWITCH', 
    VIRTUAL_SWITCH = <any>'VIRTUAL_SWITCH', 
    LEGACY_SWITCH = <any>'LEGACY_SWITCH', 
    ROUTER = <any>'ROUTER', 
    MODEM = <any>'MODEM', 
    ACCESS_POINT = <any>'ACCESS_POINT', 
    IP_PHONE = <any>'IP_PHONE', 
    APPLIANCE = <any>'APPLIANCE', 
    UNKNOWN = <any>'UNKNOWN'

}

export var DEVICETYPEDef:IModelDef = {
    meta: {
        className: 'DEVICETYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    PHISICAL_SWITCH : 1, 
    VIRTUAL_SWITCH : 2, 
    LEGACY_SWITCH : 3, 
    ROUTER : 4, 
    MODEM : 5, 
    ACCESS_POINT : 6, 
    IP_PHONE : 7, 
    APPLIANCE : 8, 
    UNKNOWN : 9

    },
    toString:()=>{
        return 'DEVICETYPE';
    }
}

