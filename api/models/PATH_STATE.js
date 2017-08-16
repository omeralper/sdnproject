'use strict';

//Model Definition File for PATH_STATE.js

'use strict';
/**
* Patika durumunu belirten ENUM değeri. Değerler şunlardır;  | Adı       | Açıklama                      | |:---------|:------------------------------| | INSTALL_REQ    | Intent tipi patika (proaktif)   | | COMPILING      | Flow tipi patika (reaktif)      | | INSTALLING     | Flow tipi patika (reaktif)      | | INSTALLED      | Flow tipi patika (reaktif)      | | RECOMPILING    | Flow tipi patika (reaktif)      | | WITHDRAW_REQ   | Flow tipi patika (reaktif)      | | WITHDRAWN      | Flow tipi patika (reaktif)      | | FAILED         | Flow tipi patika (reaktif)      | | CORRUPT        | Flow tipi patika (reaktif)      | | PURGE_REQ      | Flow tipi patika (reaktif)      | 
*/
exports.PATH_STATE = {
    type:'enum',
    name:'PATH_STATE',
    values: ['INSTALL_REQ', 'COMPILING', 'INSTALLING', 'INSTALLED', 'RECOMPILING', 'WITHDRAW_REQ', 'WITHDRAWN', 'FAILED', 'CORRUPT', 'PURGE_REQ']
}

