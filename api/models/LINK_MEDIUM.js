'use strict';

//Model Definition File for LINK_MEDIUM.js

'use strict';
/**
* nın veri iletimi için kullandığı ortam tipini belirten ENUM değeridir. Değerler şunlardır;  | Adı      | Açıklama                        | |:---------|:--------------------------------| | COPPER   | Bakır kablo ile bağlantı.       | | OPTICAL  | Fiber optik kablo ile bağlantı. | | WIRELESS | Kablosuz iletişim.              | 
*/
exports.LINK_MEDIUM = {
    type:'enum',
    name:'LINK_MEDIUM',
    values: ['COPPER', 'OPTICAL', 'WIRELESS']
}

