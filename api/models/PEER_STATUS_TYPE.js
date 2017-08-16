'use strict';

//Model Definition File for PEER_STATUS_TYPE.js

'use strict';
/**
* Yönlendirici bağlantı durumu bilgisini tutar. Değerler şunlardır;  | Adı    | Açıklama                                  | |:-------|:------------------------------------------| | ACTIVE | Eş yönelndirici ile bağlantı sağlanamış   | | PASSIVE| Eş yönelndirici ile bağlantı sağlanamamış | 
*/
exports.PEER_STATUS_TYPE = {
    type:'enum',
    name:'PEER_STATUS_TYPE',
    values: ['ACTIVE', 'PASSIVE']
}

