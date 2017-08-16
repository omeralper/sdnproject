'use strict';

//Model Definition File for TOPOLOGY_STATUS.js

'use strict';
/**
* Topoloji durumunu belirten ENUM değeridir. Değerler şunlardır;  | Adı      | Açıklama                                             | |:---------|:-----------------------------------------------------| | DOWN          | Topoloji çökmüş durumda                         | | PARTIAL_DOWN  | Topoloji sorunlu, düşük performansta çalışıyor. | | ACTIVE        | Topoloji problemsiz durumda                     | | DESIGNED      | Topoloji tasarlanmış durumda.                   | | SUBMITTED     | Topoloji onay bekliyor durumda                  | | SETUP         | Topoloji oluşturuluyor.                         | | SUSPENDED     | Topoloji askıda.                                | | REJECTED      | Topoloji red edilmiş.                           | | INVALID       | Topoloji kullanılamaz durumda.                  | 
*/
exports.TOPOLOGY_STATUS = {
    type:'enum',
    name:'TOPOLOGY_STATUS',
    values: ['DOWN', 'PARTIAL_DOWN', 'ACTIVE', 'DESIGNED', 'SUBMITTED', 'SETUP', 'SUSPENDED', 'REJECTED', 'INVALID']
}

