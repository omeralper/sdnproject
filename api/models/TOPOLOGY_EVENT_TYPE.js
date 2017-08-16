'use strict';

//Model Definition File for TOPOLOGY_EVENT_TYPE.js

'use strict';
/**
* Topoloji event tipini belirten ENUM değeridir. Değerler şunlardır;  | Adı                       | Açıklama                          | |:--------------------------|:----------------------------------| | TOPOLOGY_UPDATED          | Topolojide değişiklik oldu.       | | SWITCH_ADDED              | Anahtarlayıcı eklendi.            | | SWITCH_REMOVED            | Anahtarlayıcı kaldırıldı.         | | SWITCH_UPDATED            | Anahtarlayıcı güncellendi.        | | HOST_ADDED                | Uç birim cihazı eklendi.          | | HOST_REMOVED              | Uç birim cihazı kaldırıldı.       | | HOST_UPDATED              | Uç birim cihazı güncellendi.      | | LINK_ADDED                | Bağlantı eklendi.                 | | LINK_REMOVED              | Bağlantı kaldırıldı.              | | LINK_UPDATED              | Bağlantı güncellendi.             | | STATS_UPDATED             | İstatistikler güncellendi.        | | PORTS_UPDATED             | Port bilgileri güncellendi.       | | CONTROLLER_DEACTIVATED    | Kontrolcü düştü.                  | | CONTROLLER_ACTIVATED      | Kontrolcü ayaklandı.              | | CONTROLLER_UPDATED        | Kontrolcü güncellendi.            | | MASTER_CHANGED            | Usta kontrolcu degisti            | | RULE_ADDED                | Yeni bir akış kuralı eklendi      | | RULE_REMOVED              | Bir akış kuralı silindi           | | NETWORK_DEVICE_ADDED      | Network cihazı eklendi            | | NETWORK_DEVICE_UPDATED    | Network cihazı güncellendi        | | NETWORK_DEVICE_REMOVED    | Network cihazı silindi            | | DOMAIN_ADDED              | Geniş alan ağı eklendi            | | DOMAIN_REMOVED            | Geniş alan ağı silindi            | | DOMAIN_UPDATED            | Geniş alan ağı güncellendi        | | WAN_PORT_ADDED            | Uç birimi eklendi                 | | WAN_PORT_REMOVED          | Uç birimi silindi                 | | WAN_PORT_UPDATED          | Uç birimi güncellendi             | | ROUTER_ADDED              | Internete çıkış birimi eklendi    | | ROUTER_REMOVED            | Internete çıkış birimi silindi    | | ROUTER_UPDATED            | Internete çıkış birimi güncellendi| 
*/
exports.TOPOLOGY_EVENT_TYPE = {
    type:'enum',
    name:'TOPOLOGY_EVENT_TYPE',
    values: ['TOPOLOGY_UPDATED', 'SWITCH_ADDED', 'SWITCH_REMOVED', 'SWITCH_UPDATED', 'HOST_ADDED', 'HOST_REMOVED', 'HOST_UPDATED', 'LINK_ADDED', 'LINK_REMOVED', 'LINK_UPDATED', 'STATS_UPDATED', 'PORTS_UPDATED', 'CONTROLLER_ACTIVATED', 'CONTROLLER_DEACTIVATED', 'CONTROLLER_UPDATED', 'MASTER_CHANGED', 'RULE_ADDED', 'RULE_REMOVED', 'NETWORK_DEVICE_ADDED', 'NETWORK_DEVICE_UPDATED', 'NETWORK_DEVICE_REMOVED', 'DOMAIN_ADDED', 'DOMAIN_REMOVED', 'DOMAIN_UPDATED', 'WAN_PORT_ADDED', 'WAN_PORT_REMOVED', 'WAN_PORT_UPDATED', 'ROUTER_ADDED', 'ROUTER_REMOVED', 'ROUTER_UPDATED']
}
