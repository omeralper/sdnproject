'use strict';

//Model Definition File for SDNIP_DEFINED_SET_TYPE.js

'use strict';
/**
* Set içindeki elemanların tipini tanımlar. Değerler şunlardır;  | Adı       | Açıklama                      | |:----------|:------------------------------| | AS_PATH   | Set type for AS path          | | NEIGHBOR  | Set type for neighbor         | | PREFIX    | Set type for prefix           | 
*/
exports.SDNIP_DEFINED_SET_TYPE = {
    type:'enum',
    name:'SDNIP_DEFINED_SET_TYPE',
    values: ['AS_PATH', 'NEIGHBOR', 'PREFIX']
}

