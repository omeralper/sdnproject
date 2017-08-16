'use strict';

var url = require('url');


var Apps = require('./AppsService');


module.exports.aaaAppDeletePOST = function aaaAppDeletePOST (req, res, next) {
  Apps.aaaAppDeletePOST(req.swagger.params, res, next);
};

module.exports.aaaAppGetPOST = function aaaAppGetPOST (req, res, next) {
  Apps.aaaAppGetPOST(req.swagger.params, res, next);
};

module.exports.aaaAppListPOST = function aaaAppListPOST (req, res, next) {
  Apps.aaaAppListPOST(req.swagger.params, res, next);
};

module.exports.aaaAppSavePOST = function aaaAppSavePOST (req, res, next) {
  Apps.aaaAppSavePOST(req.swagger.params, res, next);
};

module.exports.aaaAppSearchPOST = function aaaAppSearchPOST (req, res, next) {
  Apps.aaaAppSearchPOST(req.swagger.params, res, next);
};
