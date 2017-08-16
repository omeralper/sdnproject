'use strict';

//Model Definition File for PORT_CONFIG.js

'use strict';
/**
* Anahtarlayıcı Portunun durumunu belirten ENUM değeridir. Bunlar port davranışlarını yapılandırmak için kullanılırlar. Değerler şunlardır;  | Adı          | Açıklama                                     | |:-------------|:---------------------------------------------| | PORT_DOWN    | Port, yönetimsel olarak kapatılmış.          | | NO_RECV      | Açıklama için SITD Dokümanı EK-B’ye bakınız. | | NO_FWD       | Açıklama için SITD Dokümanı EK-B’ye bakınız. | | NO_PACKET_IN | Açıklama için SITD Dokümanı EK-B’ye bakınız. | 
*/
exports.PORT_CONFIG = {
    type:'enum',
    name:'PORT_CONFIG',
    values: ['PORT_DOWN', 'NO_RECV', 'NO_FWD', 'NO_PACKET_IN']
}

