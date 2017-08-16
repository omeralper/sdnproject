'use strict';

//Model Definition File for TsdbAggregator.js

'use strict';
/**
* TSDB sorgularında bir grup veri noktasını birleştirme yöntemi
*/
exports.TsdbAggregator = {
    type:'enum',
    name:'TsdbAggregator',
    values: ['none', 'sum', 'avg', 'min', 'max', 'count']
}

