'use strict';

//Model Definition File for WAN_DOMAIN_STATUS.js

'use strict';
/**
* Alan durumunu belirten ENUM değeri. Değerler şunlardır;  | Adı      | Açıklama                     | |:---------|:-----------------------------| | FAILED   | Alan ile iletişim başarısız. | | ACTIVE   | Alan ile iletişim aktif.     | | INACTIVE | Alan ile iletişim pasif.     | 
*/
exports.WAN_DOMAIN_STATUS = {
    type:'enum',
    name:'WAN_DOMAIN_STATUS',
    values: ['FAILED', 'ACTIVE', 'INACTIVE']
}

