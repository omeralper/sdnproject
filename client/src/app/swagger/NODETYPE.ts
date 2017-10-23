//imports start NODETYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Modül node tipini\nbelirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı                 | Açıklama                |\n|:--------------------|:------------------------|\n| CONTROLLER          | Kontrolcü Tipi          |\n| API_CORE            | Api Core Tipi           |\n| ALARM_MANAGER       | Alarm Yönetim Tipi      |\n| STATISTICS_MANAGER  | İstatistik Yönetim Tipi |\n| NAS                 | Ağ Erişim Kontrol Tipi  |\n| DHCP                | DHCP Kontrol Tipi       |\n| EDR                 | Olay Kayıt Yönetim Tipi |\n| SDNIP               | BGP Yönetim Tipi        |\n| NFV_ADAPTER         | NFV ADAPTER Tipi        |\n| DHCP_CENTRAL_WAN    | DHCP Tipi               |\n| SFC                 | SFC Tipi                |
*/
export enum NODETYPE {
    CONTROLLER = <any>'CONTROLLER', 
    API_CORE = <any>'API_CORE', 
    ALARM_MANAGER = <any>'ALARM_MANAGER', 
    STATISTICS_MANAGER = <any>'STATISTICS_MANAGER', 
    NAS = <any>'NAS', 
    DHCP = <any>'DHCP', 
    EDR = <any>'EDR', 
    SDNIP = <any>'SDNIP', 
    NFV_ADAPTER = <any>'NFV_ADAPTER', 
    DHCP_CENTRAL_WAN = <any>'DHCP_CENTRAL_WAN', 
    SFC = <any>'SFC'

}

export var NODETYPEDef:IModelDef = {
    meta: {
        className: 'NODETYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    CONTROLLER : 1, 
    API_CORE : 2, 
    ALARM_MANAGER : 3, 
    STATISTICS_MANAGER : 4, 
    NAS : 5, 
    DHCP : 6, 
    EDR : 7, 
    SDNIP : 8, 
    NFV_ADAPTER : 9, 
    DHCP_CENTRAL_WAN : 10, 
    SFC : 11

    },
    toString:()=>{
        return 'NODETYPE';
    }
}

