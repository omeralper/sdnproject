'use strict';

//Model Definition File for NETWORK_DEVICE_STATUS.js

'use strict';
/**
* Anahtarlayıcı durumunu belirten ENUM değeridir. Değerler şunlardır;  | Adı      | Açıklama                         | |:---------|:---------------------------------| | DOWN     | Ağ Cihazı çökmüş durumda         | | UP       | Ağ Cihazı problemsiz durumda     | 
*/
exports.NETWORK_DEVICE_STATUS = {
    type:'enum',
    name:'NETWORK_DEVICE_STATUS',
    values: ['DOWN', 'UP']
}

