'use strict';

//Model Definition File for CONTROLLER_NODE_TYPE.js

'use strict';
/**
* Düğümün tipini belirten ENUM değeridir. Değerler şunlardır;  | Adı                 | Açıklama        | |:--------------------|:----------------| | CONTROLLER          | Kontrolcü       | | NETWORK_MANAGEMENT  | Ağ Yönetimi     | 
*/
exports.CONTROLLER_NODE_TYPE = {
    type:'enum',
    name:'CONTROLLER_NODE_TYPE',
    values: ['CONTROLLER', 'NETWORK_MANAGEMENT']
}

