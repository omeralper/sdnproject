'use strict';

//Model Definition File for EDR_STATUS.js

'use strict';
/**
* EDR nesnelerinin genel durumunu belirten ENUM değeri. Değerler şunlardır;  | Adı      | Açıklama                            | |:---------|:------------------------------------| | SUCCESS  | EDR da işaret edilen olay başarılı  | | FAIL     | EDR da işaret edilen olay başarısız | 
*/
exports.EDR_STATUS = {
    type:'enum',
    name:'EDR_STATUS',
    values: ['SUCCESS', 'FAIL']
}

