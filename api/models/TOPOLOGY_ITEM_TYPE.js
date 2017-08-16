'use strict';

//Model Definition File for TOPOLOGY_ITEM_TYPE.js

'use strict';
/**
* Topoloji öğe tipini belirten ENUM değeri. Değerler şunlardır;  | Adı      | Açıklama          | |:---------|:------------------| | TOPOLOGY | Topoloji Tanımı   | | SWITCH   | Anahtarlayıcı     | | LINK     | Bağlantı          | | HOST     | Uç Birim Cihazı   | 
*/
exports.TOPOLOGY_ITEM_TYPE = {
    type:'enum',
    name:'TOPOLOGY_ITEM_TYPE',
    values: ['TOPOLOGY', 'SWITCH', 'LINK', 'HOST']
}

