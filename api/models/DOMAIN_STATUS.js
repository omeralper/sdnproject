'use strict';

//Model Definition File for DOMAIN_STATUS.js

'use strict';
/**
* Uç Birimlerin durumunu belirten ENUM değeridir. Değerler şunlardır;  | Adı           | Açıklama                        | |:--------------|:--------------------------------| | UP            | Domain aktif.                   | | POWER_SAVER   | Domain güç tasarrufu durumunda. | | EMERGENCY     | Domain acil durumda.            | | DOWN          | Domain aktif değil.             | 
*/
exports.DOMAIN_STATUS = {
    type:'enum',
    name:'DOMAIN_STATUS',
    values: ['UP', 'POWER_SAVER', 'EMERGENCY', 'DOWN']
}

