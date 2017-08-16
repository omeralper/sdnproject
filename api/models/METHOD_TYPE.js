'use strict';

//Model Definition File for METHOD_TYPE.js

'use strict';
/**
* Ölçerin hesaplanma metodu türünü belirtir. Değerler şunlardır: | Adı             | Açıklama                   | |-----------------|----------------------------| | AVERAGE         | Hesaplama metodu &#x3D; average | | SUM             | Hesaplama metodu &#x3D; sum     | | MIN             | Hesaplama metodu &#x3D; min     | | MAX             | Hesaplama metodu &#x3D; max     | | CUSTOM          | Hesaplama metodu &#x3D; custom  | 
*/
exports.METHOD_TYPE = {
    type:'enum',
    name:'METHOD_TYPE',
    values: ['AVERAGE', 'SUM', 'MIN', 'MAX', 'CUSTOM']
}

