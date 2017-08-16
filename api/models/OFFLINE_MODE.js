'use strict';

//Model Definition File for OFFLINE_MODE.js

'use strict';
/**
* Kontrolcünün offline tipini belirten ENUM değeridir. Değerler şunlardır;  | Adı        | Açıklama        | |:-----------|:----------------| | SECURE     | SECURE Modu     | | STANDALONE | STANDALONE Modu | 
*/
exports.OFFLINE_MODE = {
    type:'enum',
    name:'OFFLINE_MODE',
    values: ['SECURE', 'STANDALONE']
}

