'use strict';

//Model Definition File for SWITCH_MODE.js

'use strict';
/**
* Anahtarlayıcı modunu belirten ENUM değeridir. Değerler şunlardır;  | Adı         | Açıklama         | |:------------|:-----------------| | ACTIVE      | Aktif durumda.   | | PASSIVE     | Pasif durumda.   | | BACKUP      | Yedek durumunda. | | MAINTANENCE | Bakımda.         | 
*/
exports.SWITCH_MODE = {
    type:'enum',
    name:'SWITCH_MODE',
    values: ['ACTIVE', 'PASSIVE', 'BACKUP', 'MAINTANENCE']
}

