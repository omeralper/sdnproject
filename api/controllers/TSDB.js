'use strict';

var url = require('url');


var TSDB = require('./TSDBService');


module.exports.tsdbMetricDefinitionPOST = function tsdbMetricDefinitionPOST (req, res, next) {
  TSDB.tsdbMetricDefinitionPOST(req.swagger.params, res, next);
};

module.exports.tsdbMetricsNtagsPOST = function tsdbMetricsNtagsPOST (req, res, next) {
  TSDB.tsdbMetricsNtagsPOST(req.swagger.params, res, next);
};

module.exports.tsdbQueryPOST = function tsdbQueryPOST (req, res, next) {
  TSDB.tsdbQueryPOST(req.swagger.params, res, next);
};
