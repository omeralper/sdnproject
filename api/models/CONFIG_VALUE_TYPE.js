'use strict';

//Model Definition File for CONFIG_VALUE_TYPE.js

'use strict';
/**
* Konfigürasyon değer tipini belirten ENUM değeri. Değerler şunlardır;  | Adı      | Açıklama             | |:---------|:---------------------| | STRING   | String Tipi          | | BYTE     | Byte Tipi            | | INTEGER  | Integer Tipi         | | LONG     | Long Tipi            | | FLOAT    | Float Tipi           | | DOUBLE   | Double Tipi          | | BOOLEAN  | Boolean Tipi         | 
*/
exports.CONFIG_VALUE_TYPE = {
    type:'enum',
    name:'CONFIG_VALUE_TYPE',
    values: ['STRING', 'BYTE', 'INTEGER', 'LONG', 'FLOAT', 'DOUBLE', 'BOOLEAN']
}

