'use strict';

//Model Definition File for PROCESSING_STATUS.js

'use strict';
/**
* İşleme durumunu belirten ENUM değeridir. Değerler şunlardır;  | Adı         | Açıklama               | |:------------|:-----------------------| | FAILED      | Özellik Başarılı Değil | | SUCCESS     | Özellik Başarılı       | | NONE        | Özellik Mevcut Değil   | 
*/
exports.PROCESSING_STATUS = {
    type:'enum',
    name:'PROCESSING_STATUS',
    values: ['FAILED', 'SUCCESS', 'NONE']
}

