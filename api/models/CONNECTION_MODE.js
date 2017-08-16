'use strict';

//Model Definition File for CONNECTION_MODE.js

'use strict';
/**
* Kontrolcü bağlantı tipini belirten ENUM değeridir. Değerler şunlardır;  | Adı     | Açıklama          | |:--------|:------------------| | INBAND  | INBAND Modu       | | OUTBAND | OUTBAND Modu      | 
*/
exports.CONNECTION_MODE = {
    type:'enum',
    name:'CONNECTION_MODE',
    values: ['INBAND', 'OUTBAND']
}

