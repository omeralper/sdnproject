'use strict';

//Model Definition File for BW_UNIT.js

'use strict';
/**
* Bant genişliği birimi. Değerler şunlardır;  | Adı      | Açıklama             | |:---------|:---------------------| | BPS      | Bit/saniye           | | KBPS     | KiloBit/saniye       | | MBPS     | MegaBit/saniye       | | GBPS     | GigaBit/saniye       | 
*/
exports.BW_UNIT = {
    type:'enum',
    name:'BW_UNIT',
    values: ['BPS', 'KBPS', 'MBPS', 'GBPS']
}

