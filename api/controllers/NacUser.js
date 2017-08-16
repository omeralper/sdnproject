'use strict';

var url = require('url');


var NacUser = require('./NacUserService');


module.exports.changepwdPOST = function changepwdPOST (req, res, next) {
  NacUser.changepwdPOST(req.swagger.params, res, next);
};

module.exports.setpwdPOST = function setpwdPOST (req, res, next) {
  NacUser.setpwdPOST(req.swagger.params, res, next);
};

module.exports.userCheckusrPOST = function userCheckusrPOST (req, res, next) {
  NacUser.userCheckusrPOST(req.swagger.params, res, next);
};

module.exports.userDeletePOST = function userDeletePOST (req, res, next) {
  NacUser.userDeletePOST(req.swagger.params, res, next);
};

module.exports.userForgetPOST = function userForgetPOST (req, res, next) {
  NacUser.userForgetPOST(req.swagger.params, res, next);
};

module.exports.userGetPOST = function userGetPOST (req, res, next) {
  NacUser.userGetPOST(req.swagger.params, res, next);
};

module.exports.userListPOST = function userListPOST (req, res, next) {
  NacUser.userListPOST(req.swagger.params, res, next);
};

module.exports.userSavePOST = function userSavePOST (req, res, next) {
  NacUser.userSavePOST(req.swagger.params, res, next);
};

module.exports.userSearchPOST = function userSearchPOST (req, res, next) {
  NacUser.userSearchPOST(req.swagger.params, res, next);
};

module.exports.userStatusPOST = function userStatusPOST (req, res, next) {
  NacUser.userStatusPOST(req.swagger.params, res, next);
};
