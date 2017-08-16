'use strict';

//Model Definition File for SDNIP_MATCH_TYPE.js

'use strict';
/**
* Eşleşme durumunu tanımlar. Değerler şunlardır;  | Adı    | Açıklama       | |:-------|:---------------| | ANY    | Herhangi biri  | | ALL    | Hepsi          | | INVERT | Ters           | 
*/
exports.SDNIP_MATCH_TYPE = {
    type:'enum',
    name:'SDNIP_MATCH_TYPE',
    values: ['ANY', 'ALL', 'INVERT']
}

