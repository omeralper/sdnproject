'use strict';

//Model Definition File for AAA_STATUS.js

'use strict';
/**
* AAA nesnelerinin genel durumunu belirten ENUM değeri. Değerler şunlardır;  | Adı      | Açıklama          | |:---------|:------------------| | ACTIVE   | Aktif AAA nesnesi | | PASSIVE  | Pasif AAA nesnesi | 
*/
exports.AAA_STATUS = {
    type:'enum',
    name:'AAA_STATUS',
    values: ['ACTIVE', 'PASSIVE']
}

