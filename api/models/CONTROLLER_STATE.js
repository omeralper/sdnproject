'use strict';

//Model Definition File for CONTROLLER_STATE.js

'use strict';
/**
* Kontrolcü durumunu belirten ENUM değeridir. Değerler şunlardır;  | Adı         | Açıklama                 | |:------------|:-------------------------| | ACTIVE      | Kontrolcü aktif.         | | READY       | Kontrolcü hazır.         | | GREEN_MODE  | Kontrolcü kapatılabilir. | | INACTIVE    | Kontrolcü aktif değil    | 
*/
exports.CONTROLLER_STATE = {
    type:'enum',
    name:'CONTROLLER_STATE',
    values: ['ACTIVE', 'READY', 'GREEN_MODE', 'INACTIVE']
}

