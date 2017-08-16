'use strict';

var url = require('url');


var AAARoles = require('./AAARolesService');


module.exports.aaaRoleDeletePOST = function aaaRoleDeletePOST (req, res, next) {
  AAARoles.aaaRoleDeletePOST(req.swagger.params, res, next);
};

module.exports.aaaRoleGetPOST = function aaaRoleGetPOST (req, res, next) {
  AAARoles.aaaRoleGetPOST(req.swagger.params, res, next);
};

module.exports.aaaRoleListPOST = function aaaRoleListPOST (req, res, next) {
  AAARoles.aaaRoleListPOST(req.swagger.params, res, next);
};

module.exports.aaaRoleSavePOST = function aaaRoleSavePOST (req, res, next) {
  AAARoles.aaaRoleSavePOST(req.swagger.params, res, next);
};

module.exports.aaaRoleSearchPOST = function aaaRoleSearchPOST (req, res, next) {
  AAARoles.aaaRoleSearchPOST(req.swagger.params, res, next);
};
