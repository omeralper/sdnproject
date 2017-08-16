'use strict';

//Model Definition File for LINK_STATUS.js

'use strict';
/**
* Bağlantı durumunu belirten ENUM değeridir. Değerler şunlardır;  | Adı     | Açıklama              | |:--------|:----------------------| | DOWN    | Bağlantı arızalı.     | | BLOCKED | Bağlantı engellenmiş. | | LIVE    | Bağlantı aktif.       | | LEGACY  | Bağlantı geleneksel.  | | INDIRECT| Dolaylı bağlantı.     | 
*/
exports.LINK_STATUS = {
    type:'enum',
    name:'LINK_STATUS',
    values: ['DOWN', 'BLOCKED', 'LIVE', 'LEGACY', 'INDIRECT']
}

