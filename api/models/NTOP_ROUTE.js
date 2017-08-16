'use strict';

//Model Definition File for NTOP_ROUTE.js

'use strict';
/**
* NTOP rotalama durumu. Değerler şunlardır;  | Adı      | Açıklama                          | |:---------|:----------------------------------| | NONE     | Belirtilmemiş                     | | DEACTIVE | NTOP Rotalama Yapılmayacaktır     | | ACTIVE   | NTOP Rotalama Yapılacaktır        | 
*/
exports.NTOP_ROUTE = {
    type:'enum',
    name:'NTOP_ROUTE',
    values: ['NONE', 'ACTIVE', 'DEACTIVE']
}

