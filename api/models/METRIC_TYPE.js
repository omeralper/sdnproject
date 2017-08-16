'use strict';

//Model Definition File for METRIC_TYPE.js

'use strict';
/**
* metrik değerinin nasıl bir sayı olduğunu belirten ENUM değeri. Değerler şunlardır;  | Adı      | Açıklama       | |:---------|:---------------| | LONG     | tamsayı        | | DOUBLE   | ondalıklı sayı | 
*/
exports.METRIC_TYPE = {
    type:'enum',
    name:'METRIC_TYPE',
    values: ['LONG', 'DOUBLE']
}

