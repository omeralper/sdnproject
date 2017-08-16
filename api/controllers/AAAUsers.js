'use strict';

var url = require('url');


var AAAUsers = require('./AAAUsersService');


module.exports.aaaUserChangepwdPOST = function aaaUserChangepwdPOST (req, res, next) {
  AAAUsers.aaaUserChangepwdPOST(req.swagger.params, res, next);
};

module.exports.aaaUserCheckusrPOST = function aaaUserCheckusrPOST (req, res, next) {
  AAAUsers.aaaUserCheckusrPOST(req.swagger.params, res, next);
};

module.exports.aaaUserDeletePOST = function aaaUserDeletePOST (req, res, next) {
  AAAUsers.aaaUserDeletePOST(req.swagger.params, res, next);
};

module.exports.aaaUserGetPOST = function aaaUserGetPOST (req, res, next) {
  AAAUsers.aaaUserGetPOST(req.swagger.params, res, next);
};

module.exports.aaaUserListPOST = function aaaUserListPOST (req, res, next) {
  AAAUsers.aaaUserListPOST(req.swagger.params, res, next);
};

module.exports.aaaUserSavePOST = function aaaUserSavePOST (req, res, next) {
  AAAUsers.aaaUserSavePOST(req.swagger.params, res, next);
};

module.exports.aaaUserSearchPOST = function aaaUserSearchPOST (req, res, next) {
  AAAUsers.aaaUserSearchPOST(req.swagger.params, res, next);
};

module.exports.aaaUserSetpwdPOST = function aaaUserSetpwdPOST (req, res, next) {
  AAAUsers.aaaUserSetpwdPOST(req.swagger.params, res, next);
};
