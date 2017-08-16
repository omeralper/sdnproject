'use strict';

//Model Definition File for FLOW_STATE.js

'use strict';
/**
* Akış durumunu belirten ENUM değeri. Değerler şunlardır;  | Adı            | Değeri                                              | |----------------|-----------------------------------------------------| | PENDING_ADD    | cihaza girilmek üzere bekleniyor                    | | ADDED          | cihaza eklenmiş                                     | | PENDING_REMOVE | cihazdan silinmek üzere bekleniyor                  | | REMOVED        | cihazdan silinmiş                                   | | FAILED         | akışın eklenmesinde ya da silinmesinde hata alınmış | 
*/
exports.FLOW_STATE = {
    type:'enum',
    name:'FLOW_STATE',
    values: ['PENDING_ADD', 'ADDED', 'PENDING_REMOVE', 'REMOVED', 'FAILED']
}

