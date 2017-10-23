//imports start NETWORKDEVICETYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Ağ cihaz tipini belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı              | Açıklama           |\n|:-----------------|:-------------------|\n| GATEWAY          | Ağ Geçidi          |\n| ACCESS_POINT     | Erişim Noktası     |\n| DHCP_SERVER      | DHCP Sunucusu      |\n| VIRTUAL_GATEWAY  | Sanal Ağ Geçidi    |\n| NTOP             | NTOP               |\n| VRR              | Yedeklenen Cihazlar|\n| FIREWALL         | Güvenlik Duvarı    |
*/
export enum NETWORKDEVICETYPE {
    GATEWAY = <any>'GATEWAY', 
    ACCESS_POINT = <any>'ACCESS_POINT', 
    DHCP_SERVER = <any>'DHCP_SERVER', 
    VIRTUAL_GATEWAY = <any>'VIRTUAL_GATEWAY', 
    VRR = <any>'VRR', 
    NTOP = <any>'NTOP', 
    FIREWALL = <any>'FIREWALL', 
    INTERNAL_GATEWAY = <any>'INTERNAL_GATEWAY'

}

export var NETWORKDEVICETYPEDef:IModelDef = {
    meta: {
        className: 'NETWORKDEVICETYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    GATEWAY : 1, 
    ACCESS_POINT : 2, 
    DHCP_SERVER : 3, 
    VIRTUAL_GATEWAY : 4, 
    VRR : 5, 
    NTOP : 6, 
    FIREWALL : 7, 
    INTERNAL_GATEWAY : 8

    },
    toString:()=>{
        return 'NETWORKDEVICETYPE';
    }
}

