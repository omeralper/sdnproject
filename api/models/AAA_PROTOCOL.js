'use strict';

//Model Definition File for AAA_PROTOCOL.js

'use strict';
/**
* AAA Sunucuları tarafından desteklenen protokol tipini belirten ENUM değeri. Değerler şunlardır;  | Adı      | Açıklama           | |:---------|:-------------------| | RADIUS   | RADIUS Protokolü   | | LDAP     | LDAP Protokolü     | 
*/
exports.AAA_PROTOCOL = {
    type:'enum',
    name:'AAA_PROTOCOL',
    values: ['RADIUS', 'LDAP']
}

