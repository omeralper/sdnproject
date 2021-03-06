'use strict';

//Model Definition File for NODE_TYPE.js

'use strict';
/**
* Modül node tipini belirten ENUM değeri. Değerler şunlardır;  | Adı                 | Açıklama                | |:--------------------|:------------------------| | CONTROLLER          | Kontrolcü Tipi          | | API_CORE            | Api Core Tipi           | | ALARM_MANAGER       | Alarm Yönetim Tipi      | | STATISTICS_MANAGER  | İstatistik Yönetim Tipi | | NAS                 | Ağ Erişim Kontrol Tipi  | | DHCP                | DHCP Kontrol Tipi       | | EDR                 | Olay Kayıt Yönetim Tipi | | SDNIP               | BGP Yönetim Tipi        | | NFV_ADAPTER         | NFV ADAPTER Tipi        | | DHCP_CENTRAL_WAN    | DHCP Tipi               | | SFC                 | SFC Tipi                | 
*/
exports.NODE_TYPE = {
    type:'enum',
    name:'NODE_TYPE',
    values: ['CONTROLLER', 'API_CORE', 'ALARM_MANAGER', 'STATISTICS_MANAGER', 'NAS', 'DHCP', 'EDR', 'SDNIP', 'NFV_ADAPTER', 'DHCP_CENTRAL_WAN', 'SFC']
}

