'use strict';

//Model Definition File for NETWORK_DEVICE_TYPE.js

'use strict';
/**
* Ağ cihaz tipini belirten ENUM değeridir. Değerler şunlardır;  | Adı              | Açıklama           | |:-----------------|:-------------------| | GATEWAY          | Ağ Geçidi          | | ACCESS_POINT     | Erişim Noktası     | | DHCP_SERVER      | DHCP Sunucusu      | | VIRTUAL_GATEWAY  | Sanal Ağ Geçidi    | | NTOP             | NTOP               | | VRR              | Yedeklenen Cihazlar| | FIREWALL         | Güvenlik Duvarı    | 
*/
exports.NETWORK_DEVICE_TYPE = {
    type:'enum',
    name:'NETWORK_DEVICE_TYPE',
    values: ['GATEWAY', 'ACCESS_POINT', 'DHCP_SERVER', 'VIRTUAL_GATEWAY', 'VRR', 'NTOP', 'FIREWALL', 'INTERNAL_GATEWAY']
}

