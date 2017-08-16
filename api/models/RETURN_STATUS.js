'use strict';

//Model Definition File for RETURN_STATUS.js

'use strict';
/**
* Tüm API cevaplarında kullanılacak genel durum belirten değerdir.
*/
exports.RETURN_STATUS = {
    type:'enum',
    name:'RETURN_STATUS',
    values: ['SUCCESS', 'ERROR', 'SERVER_ERROR', 'ACCESS_DENIED', 'ACCESS_LIMITED', 'NOT_MODIFIED', 'NOT_IMPLEMENTED', 'INVALID_SESSION', 'DEPRECATED']
}

