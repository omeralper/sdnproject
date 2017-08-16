'use strict';

//Model Definition File for LINK_TYPE.js

'use strict';
/**
* Link tipini belirten ENUM değeridir. Değerler şunlardır;  | Adı             | Açıklama                 | |-----------------|--------------------------| | COPPER          | Bakır kablo              | | FIBER           | Fiber-optik kablo        | | PACKET          |                          | | ODUCLT          |                          | | OCH             |                          | | OMS             |                          | | VIRTUAL         |                          | | OTU             |                          | | SECURE          |                          | 
*/
exports.LINK_TYPE = {
    type:'enum',
    name:'LINK_TYPE',
    values: ['COPPER', 'FIBER', 'PACKET', 'ODUCLT', 'OCH', 'OMS', 'VIRTUAL', 'OTU', 'SECURE']
}

