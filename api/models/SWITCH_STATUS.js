'use strict';

//Model Definition File for SWITCH_STATUS.js

'use strict';
/**
* Anahtarlayıcı durumunu belirten ENUM değeridir. Değerler şunlardır;  | Adı         | Açıklama                               | |:------------|:---------------------------------------| | DOWN        | Anahtarlayıcı çökmüş durumda           | | UP          | Anahtarlayıcı problemsiz durumda       | | POWER_SAVER | Anahtarlayıcı enerji tasarrufu modunda | | EMERGENCY   | Anahtarlayıcı acil durumda             | 
*/
exports.SWITCH_STATUS = {
    type:'enum',
    name:'SWITCH_STATUS',
    values: ['DOWN', 'UP', 'POWER_SAVER', 'EMERGENCY']
}

