'use strict';

//Model Definition File for FLOWBALANCECONSTRAINTTYPE.js

'use strict';
/**
* Akışları dengelemek için kullanılacak constraintler  | Adı                             | Açıklama             | |:--------------------------------|:---------------------| | FLOW_COUNT_CONSTRAINT           | Minimum akış sayısı  | | AVAILABLE_BANDWIDTH_CONSTRAINT  | Bandwidth genişliği  | 
*/
exports.FLOWBALANCECONSTRAINTTYPE = {
    type:'enum',
    name:'FLOWBALANCECONSTRAINTTYPE',
    values: ['FLOW_COUNT_CONSTRAINT', 'AVAILABLE_BANDWITDH_CONSTRAINT']
}

