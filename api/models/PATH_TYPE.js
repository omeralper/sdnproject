'use strict';

//Model Definition File for PATH_TYPE.js

'use strict';
/**
* Patika tipini belirten ENUM değeri. Değerler şunlardır;  | Adı      | Açıklama                      | |:---------|:------------------------------| | INTENT   | Intent tipi patika (proaktif) | | FLOW     | Flow tipi patika (reaktif)    | 
*/
exports.PATH_TYPE = {
    type:'enum',
    name:'PATH_TYPE',
    values: ['INTENT', 'FLOW']
}

