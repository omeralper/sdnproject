'use strict';

//Model Definition File for NAC_STATUS.js

'use strict';
/**
* Son kullanıcı nesnelerinin genel durumunu belirten ENUM değeri. Değerler şunlardır;  | Adı      | Açıklama    | |:---------|:------------| | ACTIVE   | Aktif nesne | | PASSIVE  | Pasif nesne | 
*/
exports.NAC_STATUS = {
    type:'enum',
    name:'NAC_STATUS',
    values: ['ACTIVE', 'PASSIVE']
}

