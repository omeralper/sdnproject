'use strict';

//Model Definition File for LOG_LEVEL.js

'use strict';
/**
* Günlük seviyesini belirten ENUM değeri. Değerler şunlardır;  | Adı   | Açıklama                      | |:------|:------------------------------| | OFF   | Günlük Kapalı.                | | FATAL | Ölümcül  Günlük Seviyesi.     | | ERROR | Hata Günlük Seviyesi.         | | WARN  | Uyarı Günlük Seviyesi         | | INFO  | Bilgi Günlük Seviyesi         | | DEBUG | Hata Ayıklama Günlük Seviyesi | | TRACE | Takip Günlük Seviyesi         | | ALL   | Tüm Seviyeler.                | 
*/
exports.LOG_LEVEL = {
    type:'enum',
    name:'LOG_LEVEL',
    values: ['OFF', 'FATAL', 'ERROR', 'WARN', 'INFO', 'DEBUG', 'TRACE', 'ALL']
}

