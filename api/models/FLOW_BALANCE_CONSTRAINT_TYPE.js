'use strict';

//Model Definition File for FLOW_BALANCE_CONSTRAINT_TYPE.js

'use strict';
/**
* Akışları dengelemek için kullanılacak constraintler  | Adı                             | Açıklama             | |:--------------------------------|:---------------------| | MIN_HOP_CONSTRAINT              | Minimum akış sayısı  | | AVAILABLE_BANDWITDH_CONSTRAINT  | Bandwidth genişliği  | 
*/
exports.FLOW_BALANCE_CONSTRAINT_TYPE = {
    type:'enum',
    name:'FLOW_BALANCE_CONSTRAINT_TYPE',
    values: ['MIN_HOP_CONSTRAINT', 'AVAILABLE_BANDWITDH_CONSTRAINT']
}

