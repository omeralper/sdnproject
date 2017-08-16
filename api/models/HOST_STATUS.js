'use strict';

//Model Definition File for HOST_STATUS.js

'use strict';
/**
* Uç Birimlerin durumunu belirten ENUM değeridir. Değerler şunlardır;  | Adı     | Açıklama              | |:--------|:----------------------| | LIVE    | Bağlantı aktif.       | | GRANTED | Bağlantı kimlik doğrulaması yapılmış. | 
*/
exports.HOST_STATUS = {
    type:'enum',
    name:'HOST_STATUS',
    values: ['LIVE', 'GRANTED']
}

