'use strict';

//Model Definition File for ROUTER_TYPE.js

'use strict';
/**
* Router komşuluk bilgisini tutar. Değerler şunlardır;  | Adı             | Açıklama                      | |:----------------|:------------------------------| | SPEAKER         | BGP Speaker                   | | PEER            | BGP Peer                      | | ROUTE REFLECTOR | BGP Route Reflector           | 
*/
exports.ROUTER_TYPE = {
    type:'enum',
    name:'ROUTER_TYPE',
    values: ['SPEAKER', 'PEER', 'ROUTE_REFLECTOR']
}

