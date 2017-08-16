'use strict';

//Model Definition File for QUERY_OP.js

'use strict';
/**
* Tüm arama API’larında kullanılacak işlem değeridir.
*/
exports.QUERY_OP = {
    type:'enum',
    name:'QUERY_OP',
    values: ['NOOP', 'VALUE', 'AND', 'OR', 'NOT', 'EXACT_VALUE', 'GREATER', 'SMALLER', 'GREATER_EQUAL', 'SMALLER_EQUAL', 'LIST']
}

