'use strict';

//Model Definition File for FlowStatAggregator.js

'use strict';
/**
* Akış istatistiklerini bütün alanlarına bakarak değil değil de sadece belirtilen alanlara bakarak gruplandırmaya yarar
*/
exports.FlowStatAggregator = {
    type:'enum',
    name:'FlowStatAggregator',
    values: ['srcIP', 'dstIP', 'protocol', 'srcPort', 'dstPort']
}

