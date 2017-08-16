'use strict';

//Model Definition File for RESERVED_PATH.js

'use strict';
/**
* Patika rezervasyonu özelliği. Değerler şunlardır;  | Adı      | Açıklama                           | |:---------|:-----------------------------------| | NONE     | Belirtilmemiş                      | | DEACTIVE | Patika rezervasyonu yapılmayacaktır| | ACTIVE   | Patika rezervasyonu yapılacaktır   | 
*/
exports.RESERVED_PATH = {
    type:'enum',
    name:'RESERVED_PATH',
    values: ['NONE', 'ACTIVE', 'DEACTIVE']
}

