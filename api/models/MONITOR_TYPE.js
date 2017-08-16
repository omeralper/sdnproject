'use strict';

//Model Definition File for MONITOR_TYPE.js

'use strict';
/**
* Gösterge türünü belirtir. Değerler şunlardır: | Adı             | Açıklama                   | |-----------------|----------------------------| | COUNTER         | Gösterge Türü &#x3D; counter    | | GAUGE           | Gösterge Türü &#x3D; gauge      | 
*/
exports.MONITOR_TYPE = {
    type:'enum',
    name:'MONITOR_TYPE',
    values: ['COUNTER', 'GAUGE']
}

