'use strict';

//Model Definition File for NAC_DEVICE_STATUS.js

'use strict';
/**
* Cihaz nesnelerinin genel durumunu belirten ENUM değeri. Değerler şunlardır;  | Adı          | Açıklama                  | |:---------    |:--------------------------| | ACTIVE       | Aktif cihaz               | | QUARANTINED  | Karantinaya alınmış cihaz | 
*/
exports.NAC_DEVICE_STATUS = {
    type:'enum',
    name:'NAC_DEVICE_STATUS',
    values: ['ACTIVE', 'QUARANTINED']
}

