'use strict';

var url = require('url');


var Log = require('./LogService');


module.exports.logLevelListPOST = function logLevelListPOST (req, res, next) {
  Log.logLevelListPOST(req.swagger.params, res, next);
};

module.exports.logLevelUpdatePOST = function logLevelUpdatePOST (req, res, next) {
  Log.logLevelUpdatePOST(req.swagger.params, res, next);
};

module.exports.logSaveListPOST = function logSaveListPOST (req, res, next) {
  Log.logSaveListPOST(req.swagger.params, res, next);
};

module.exports.logSavePOST = function logSavePOST (req, res, next) {
  Log.logSavePOST(req.swagger.params, res, next);
};
