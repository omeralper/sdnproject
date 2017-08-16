'use strict';

var url = require('url');


var FlowStatistics = require('./FlowStatisticsService');


module.exports.flowStatsUserPOST = function flowStatsUserPOST (req, res, next) {
  FlowStatistics.flowStatsUserPOST(req.swagger.params, res, next);
};
