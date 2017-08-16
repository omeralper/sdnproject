'use strict';

//Model Definition File for SDNIP_ROUTE_ACTION.js

'use strict';
/**
* Eşleşme durumunda ne yapılacağını tanımlar. Değerler şunlardır;  | Adı       | Açıklama  | |:----------|:----------| | ACCEPT    | Kabul et  | | REJECT    | Reddet    | 
*/
exports.SDNIP_ROUTE_ACTION = {
    type:'enum',
    name:'SDNIP_ROUTE_ACTION',
    values: ['ACCEPT', 'REJECT']
}

