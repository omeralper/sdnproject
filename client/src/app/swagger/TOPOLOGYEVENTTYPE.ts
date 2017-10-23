//imports start TOPOLOGYEVENTTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Topoloji event tipini belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı                       | Açıklama                            |\n|:--------------------------|:------------------------------------|\n| TOPOLOGY_UPDATED          | Topolojide değişiklik oldu.         |\n| SWITCH_ADDED              | Anahtarlayıcı eklendi.              |\n| SWITCH_REMOVED            | Anahtarlayıcı kaldırıldı.           |\n| SWITCH_UPDATED            | Anahtarlayıcı güncellendi.          |\n| HOST_ADDED                | Uç birim cihazı eklendi.            |\n| HOST_REMOVED              | Uç birim cihazı kaldırıldı.         |\n| HOST_UPDATED              | Uç birim cihazı güncellendi.        |\n| LINK_ADDED                | Bağlantı eklendi.                   |\n| LINK_REMOVED              | Bağlantı kaldırıldı.                |\n| LINK_UPDATED              | Bağlantı güncellendi.               |\n| STATS_UPDATED             | İstatistikler güncellendi.          |\n| PORTS_UPDATED             | Port bilgileri güncellendi.         |\n| CONTROLLER_DEACTIVATED    | Kontrolcü düştü.                    |\n| CONTROLLER_ACTIVATED      | Kontrolcü ayaklandı.                |\n| CONTROLLER_UPDATED        | Kontrolcü güncellendi.              |\n| MASTER_CHANGED            | Usta kontrolcu degisti              |\n| RULE_ADDED                | Yeni bir akış kuralı eklendi        |\n| RULE_REMOVED              | Bir akış kuralı silindi             |\n| NETWORK_DEVICE_ADDED      | Network cihazı eklendi              |\n| NETWORK_DEVICE_UPDATED    | Network cihazı güncellendi          |\n| NETWORK_DEVICE_REMOVED    | Network cihazı silindi              |\n| DOMAIN_ADDED              | Geniş alan ağı eklendi              |\n| DOMAIN_REMOVED            | Geniş alan ağı silindi              |\n| DOMAIN_UPDATED            | Geniş alan ağı güncellendi          |\n| WAN_PORT_ADDED            | Uç birimi eklendi                   |\n| WAN_PORT_REMOVED          | Uç birimi silindi                   |\n| WAN_PORT_UPDATED          | Uç birimi güncellendi               |\n| ROUTER_ADDED              | Internete çıkış birimi eklendi      |\n| ROUTER_REMOVED            | Internete çıkış birimi silindi      |\n| ROUTER_UPDATED            | Internete çıkış birimi güncellendi  |\n| DOMAIN_INFO_UPDATED       | Domain bilgilerinde değişiklik oldu.|
*/
export enum TOPOLOGYEVENTTYPE {
    TOPOLOGY_UPDATED = <any>'TOPOLOGY_UPDATED', 
    SWITCH_ADDED = <any>'SWITCH_ADDED', 
    SWITCH_REMOVED = <any>'SWITCH_REMOVED', 
    SWITCH_UPDATED = <any>'SWITCH_UPDATED', 
    HOST_ADDED = <any>'HOST_ADDED', 
    HOST_REMOVED = <any>'HOST_REMOVED', 
    HOST_UPDATED = <any>'HOST_UPDATED', 
    LINK_ADDED = <any>'LINK_ADDED', 
    LINK_REMOVED = <any>'LINK_REMOVED', 
    LINK_UPDATED = <any>'LINK_UPDATED', 
    STATS_UPDATED = <any>'STATS_UPDATED', 
    PORTS_UPDATED = <any>'PORTS_UPDATED', 
    CONTROLLER_ACTIVATED = <any>'CONTROLLER_ACTIVATED', 
    CONTROLLER_DEACTIVATED = <any>'CONTROLLER_DEACTIVATED', 
    CONTROLLER_UPDATED = <any>'CONTROLLER_UPDATED', 
    MASTER_CHANGED = <any>'MASTER_CHANGED', 
    RULE_ADDED = <any>'RULE_ADDED', 
    RULE_REMOVED = <any>'RULE_REMOVED', 
    NETWORK_DEVICE_ADDED = <any>'NETWORK_DEVICE_ADDED', 
    NETWORK_DEVICE_UPDATED = <any>'NETWORK_DEVICE_UPDATED', 
    NETWORK_DEVICE_REMOVED = <any>'NETWORK_DEVICE_REMOVED', 
    DOMAIN_ADDED = <any>'DOMAIN_ADDED', 
    DOMAIN_REMOVED = <any>'DOMAIN_REMOVED', 
    DOMAIN_UPDATED = <any>'DOMAIN_UPDATED', 
    WAN_PORT_ADDED = <any>'WAN_PORT_ADDED', 
    WAN_PORT_REMOVED = <any>'WAN_PORT_REMOVED', 
    WAN_PORT_UPDATED = <any>'WAN_PORT_UPDATED', 
    ROUTER_ADDED = <any>'ROUTER_ADDED', 
    ROUTER_REMOVED = <any>'ROUTER_REMOVED', 
    ROUTER_UPDATED = <any>'ROUTER_UPDATED', 
    DOMAIN_INFO_UPDATED = <any>'DOMAIN_INFO_UPDATED'

}

export var TOPOLOGYEVENTTYPEDef:IModelDef = {
    meta: {
        className: 'TOPOLOGYEVENTTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    TOPOLOGY_UPDATED : 1, 
    SWITCH_ADDED : 2, 
    SWITCH_REMOVED : 3, 
    SWITCH_UPDATED : 4, 
    HOST_ADDED : 5, 
    HOST_REMOVED : 6, 
    HOST_UPDATED : 7, 
    LINK_ADDED : 8, 
    LINK_REMOVED : 9, 
    LINK_UPDATED : 10, 
    STATS_UPDATED : 11, 
    PORTS_UPDATED : 12, 
    CONTROLLER_ACTIVATED : 13, 
    CONTROLLER_DEACTIVATED : 14, 
    CONTROLLER_UPDATED : 15, 
    MASTER_CHANGED : 16, 
    RULE_ADDED : 17, 
    RULE_REMOVED : 18, 
    NETWORK_DEVICE_ADDED : 19, 
    NETWORK_DEVICE_UPDATED : 20, 
    NETWORK_DEVICE_REMOVED : 21, 
    DOMAIN_ADDED : 22, 
    DOMAIN_REMOVED : 23, 
    DOMAIN_UPDATED : 24, 
    WAN_PORT_ADDED : 25, 
    WAN_PORT_REMOVED : 26, 
    WAN_PORT_UPDATED : 27, 
    ROUTER_ADDED : 28, 
    ROUTER_REMOVED : 29, 
    ROUTER_UPDATED : 30, 
    DOMAIN_INFO_UPDATED : 31

    },
    toString:()=>{
        return 'TOPOLOGYEVENTTYPE';
    }
}

