'use strict';

//Model Definition File for CONTROLLER_STATUS.js

'use strict';
/**
* Kontrolcü bağlantı durumunu belirten ENUM değeridir. Değerler şunlardır;  | Adı     | Açıklama              | |:--------|:----------------------| | ACTIVE  | Kontrolcü Bağlı       | | PASSIVE | Kontrolcü Bağlı Değil | 
*/
exports.CONTROLLER_STATUS = {
    type:'enum',
    name:'CONTROLLER_STATUS',
    values: ['ACTIVE', 'PASSIVE']
}

