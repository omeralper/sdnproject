'use strict';

var url = require('url');


var AAAPermissions = require('./AAAPermissionsService');


module.exports.aaaPermGetPOST = function aaaPermGetPOST (req, res, next) {
  AAAPermissions.aaaPermGetPOST(req.swagger.params, res, next);
};

module.exports.aaaPermListPOST = function aaaPermListPOST (req, res, next) {
  AAAPermissions.aaaPermListPOST(req.swagger.params, res, next);
};

module.exports.aaaPermSearchPOST = function aaaPermSearchPOST (req, res, next) {
  AAAPermissions.aaaPermSearchPOST(req.swagger.params, res, next);
};
