'use strict';

//Model Definition File for SUPER_TOPOLOGY_TYPE.js

'use strict';
/**
* Süper Topolojideki birimlerin tipini belirten ENUM değeridir. Değerler şunlardır;  | Adı          | Açıklama           | |:-------------|:-------------------| | DOMAIN       | Süper Ağ.          | | PORT        | Internet Cihazı    | 
*/
exports.SUPER_TOPOLOGY_TYPE = {
    type:'enum',
    name:'SUPER_TOPOLOGY_TYPE',
    values: ['DOMAIN', 'PORT']
}

