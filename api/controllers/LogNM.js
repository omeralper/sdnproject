'use strict';

var url = require('url');


var LogNM = require('./LogNMService');


module.exports.logLevelListPOST = function logLevelListPOST (req, res, next) {
  LogNM.logLevelListPOST(req.swagger.params, res, next);
};

module.exports.logLevelUpdatePOST = function logLevelUpdatePOST (req, res, next) {
  LogNM.logLevelUpdatePOST(req.swagger.params, res, next);
};
