'use strict';

var url = require('url');


var NacAuth = require('./NacAuthService');


module.exports.getsessionPOST = function getsessionPOST (req, res, next) {
  NacAuth.getsessionPOST(req.swagger.params, res, next);
};

module.exports.getsessioncountPOST = function getsessioncountPOST (req, res, next) {
  NacAuth.getsessioncountPOST(req.swagger.params, res, next);
};

module.exports.loginPOST = function loginPOST (req, res, next) {
  NacAuth.loginPOST(req.swagger.params, res, next);
};

module.exports.logoutPOST = function logoutPOST (req, res, next) {
  NacAuth.logoutPOST(req.swagger.params, res, next);
};

module.exports.lostpwdPOST = function lostpwdPOST (req, res, next) {
  NacAuth.lostpwdPOST(req.swagger.params, res, next);
};
