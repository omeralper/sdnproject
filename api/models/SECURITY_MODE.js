'use strict';

//Model Definition File for SECURITY_MODE.js

'use strict';
/**
* Kontrolcü güvenlik modunu belirten ENUM değeridir. Değerler şunlardır;  | Adı         | Açıklama                 | |:------------|:-------------------------| | OFF         | Güvenlik aktif değil.    | | TLS         | TLS güvenliği sağlanmış. | 
*/
exports.SECURITY_MODE = {
    type:'enum',
    name:'SECURITY_MODE',
    values: ['OFF', 'TLS']
}

