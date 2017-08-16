'use strict';

var url = require('url');


var Monitor = require('./MonitorService');


module.exports.monitorAlarmSetPOST = function monitorAlarmSetPOST (req, res, next) {
  Monitor.monitorAlarmSetPOST(req.swagger.params, res, next);
};

module.exports.monitorGetPOST = function monitorGetPOST (req, res, next) {
  Monitor.monitorGetPOST(req.swagger.params, res, next);
};

module.exports.monitorSelectPOST = function monitorSelectPOST (req, res, next) {
  Monitor.monitorSelectPOST(req.swagger.params, res, next);
};
