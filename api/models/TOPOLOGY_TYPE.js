'use strict';

//Model Definition File for TOPOLOGY_TYPE.js

'use strict';
/**
* Topoloji tipini belirten ENUM değeri. Değerler şunlardır;  | Adı             | Açıklama                 | |:----------------|:-------------------------| | PHYSICAL        | Fiziksel Topoloji        | | VIRTUAL         | Sanal Topoloji           | | VIRTUAL_REQUEST | Sanal ağ İstek Topolojisi| | SUPER           | WAN Topolojisi           | 
*/
exports.TOPOLOGY_TYPE = {
    type:'enum',
    name:'TOPOLOGY_TYPE',
    values: ['PHYSICAL', 'VIRTUAL', 'VIRTUAL_REQUEST', 'SUPER']
}

