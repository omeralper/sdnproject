'use strict';

//Model Definition File for WAN_PORT_INFO_STATUS.js

'use strict';
/**
* Geniş alan ağlarının bağlantı durumunu belirten ENUM değeridir. Değerler şunlardır;  | Adı       | Açıklama                    | |:----------|:----------------------------| | UP        | Geniş Alan Ağı Bağlı        | | DOWN      | Geniş Alan Ağı Bağlı Değil  | | DISABLED  | Geniş Alan Ağı Engelli      | 
*/
exports.WAN_PORT_INFO_STATUS = {
    type:'enum',
    name:'WAN_PORT_INFO_STATUS',
    values: ['UP', 'DOWN', 'DISABLED']
}

