'use strict';

//Model Definition File for WAN_PORT_TYPE.js

'use strict';
/**
* Geniş alan ağlarının bağlantı tipini belirten ENUM değeridir. Değerler şunlardır;  | Adı       | Açıklama                    | |:----------|:----------------------------| | FIBER     | Fiber Kablo                 | | COPPER    | Bakır Kablo                 | | RADIO     | Radyo Dalgası               | | ENCRYPTED | Şifreli                     | 
*/
exports.WAN_PORT_TYPE = {
    type:'enum',
    name:'WAN_PORT_TYPE',
    values: ['FIBER', 'COPPER', 'RADIO', 'ENCRYPTED']
}

