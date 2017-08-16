'use strict';

//Model Definition File for SDNIP_POLICY_TYPE.js

'use strict';
/**
* Politikaların etkinlik yönünü tanımlar. Değerler şunlardır;  | Adı       | Açıklama   | |:----------|:-----------| | IMPORT    | İçe doğru  | | EXPORT    | Dışa doğru | 
*/
exports.SDNIP_POLICY_TYPE = {
    type:'enum',
    name:'SDNIP_POLICY_TYPE',
    values: ['IMPORT', 'EXPORT']
}

