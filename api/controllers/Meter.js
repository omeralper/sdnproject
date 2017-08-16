'use strict';

var url = require('url');


var Meter = require('./MeterService');


module.exports.meterListPOST = function meterListPOST (req, res, next) {
  Meter.meterListPOST(req.swagger.params, res, next);
};
