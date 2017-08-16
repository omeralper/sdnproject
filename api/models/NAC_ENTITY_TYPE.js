'use strict';

//Model Definition File for NAC_ENTITY_TYPE.js

'use strict';
/**
* Son kullanıcıların tipini belirten ENUM değeri. Değerler şunlardır;  | Adı      | Açıklama           | |:---------|:-------------------| | GUEST    | Misafir Kullanıcı  | | STAFF    | Personel Kullanıcı | 
*/
exports.NAC_ENTITY_TYPE = {
    type:'enum',
    name:'NAC_ENTITY_TYPE',
    values: ['GUEST', 'STAFF']
}

