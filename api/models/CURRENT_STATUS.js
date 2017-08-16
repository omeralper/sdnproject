'use strict';

//Model Definition File for CURRENT_STATUS.js

'use strict';
/**
* Mevcut durumu belirten ENUM değeridir. Değerler şunlardır;  | Adı         | Açıklama              | |:------------|:----------------------| | INSTALLED   | İşleme Yapıldı        | | UNINSTALLED | İşleme Yapılı Değil   | | PROCESSING  | İşleme Yapılmakta     | 
*/
exports.CURRENT_STATUS = {
    type:'enum',
    name:'CURRENT_STATUS',
    values: ['INSTALLED', 'UNINSTALLED', 'PROCESSING']
}

