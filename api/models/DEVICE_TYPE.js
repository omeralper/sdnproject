'use strict';

//Model Definition File for DEVICE_TYPE.js

'use strict';
/**
* Cihaz tipini belirten ENUM değeridir. Değerler şunlardır;  | Adı             | Açıklama                       | |:----------------|:-------------------------------| | PHISICAL_SWITCH | Fiziksel Anahtarlayıcı.        | | VIRTUAL_SWITCH  | Sanal Anahtarlayıcı.           | | LEGACY_SWITCH   | Geleneksel Anahtarlayıcı.      | | ROUTER          | Yönlendirici.                  | | MODEM           | Modem.                         | | ACCESS_POINT    | Erişim Noktası.                | | IP_PHONE        | IP Telefon                     | | APPLIANCE       | Ağ Uygulaması (firewall, vs..) | | UNKNOWN         | Bilinmiyor.                    | 
*/
exports.DEVICE_TYPE = {
    type:'enum',
    name:'DEVICE_TYPE',
    values: ['PHISICAL_SWITCH', 'VIRTUAL_SWITCH', 'LEGACY_SWITCH', 'ROUTER', 'MODEM', 'ACCESS_POINT', 'IP_PHONE', 'APPLIANCE', 'UNKNOWN']
}

