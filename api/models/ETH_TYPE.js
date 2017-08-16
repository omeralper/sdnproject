'use strict';

//Model Definition File for ETH_TYPE.js

'use strict';
/**
* Temel IP protokol tipini belirten ENUM değeri. Değerler şunlardır;  | Adı   | Açıklama          | |:------|:------------------| | TCP   | TCP Protokolü     | | UDP   | UDP Protokolü     | | ANY   | Herhangi Protokol | 
*/
exports.ETH_TYPE = {
    type:'enum',
    name:'ETH_TYPE',
    values: ['TCP', 'UDP', 'ANY']
}

