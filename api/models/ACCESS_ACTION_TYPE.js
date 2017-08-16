'use strict';

//Model Definition File for ACCESS_ACTION_TYPE.js

'use strict';
/**
* Erişim politikası aksiyon tipini belirten ENUM değeri. Değerler şunlardır;  | Adı      | Açıklama             | |:---------|:---------------------| | ACCESS   | Erişim İzinli        | | DENIED   | Erişim Engellendi    | 
*/
exports.ACCESS_ACTION_TYPE = {
    type:'enum',
    name:'ACCESS_ACTION_TYPE',
    values: ['ACCESS', 'DENIED']
}

