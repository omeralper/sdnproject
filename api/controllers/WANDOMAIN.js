'use strict';

var url = require('url');


var WANDOMAIN = require('./WANDOMAINService');


module.exports.wanConfigurationWanDomainBulkSavePOST = function wanConfigurationWanDomainBulkSavePOST (req, res, next) {
  WANDOMAIN.wanConfigurationWanDomainBulkSavePOST(req.swagger.params, res, next);
};

module.exports.wanConfigurationWanDomainCurrentPOST = function wanConfigurationWanDomainCurrentPOST (req, res, next) {
  WANDOMAIN.wanConfigurationWanDomainCurrentPOST(req.swagger.params, res, next);
};

module.exports.wanConfigurationWanDomainDeletePOST = function wanConfigurationWanDomainDeletePOST (req, res, next) {
  WANDOMAIN.wanConfigurationWanDomainDeletePOST(req.swagger.params, res, next);
};

module.exports.wanConfigurationWanDomainGetPOST = function wanConfigurationWanDomainGetPOST (req, res, next) {
  WANDOMAIN.wanConfigurationWanDomainGetPOST(req.swagger.params, res, next);
};

module.exports.wanConfigurationWanDomainListPOST = function wanConfigurationWanDomainListPOST (req, res, next) {
  WANDOMAIN.wanConfigurationWanDomainListPOST(req.swagger.params, res, next);
};

module.exports.wanConfigurationWanDomainSavePOST = function wanConfigurationWanDomainSavePOST (req, res, next) {
  WANDOMAIN.wanConfigurationWanDomainSavePOST(req.swagger.params, res, next);
};

module.exports.wanConfigurationWanDomainSearchPOST = function wanConfigurationWanDomainSearchPOST (req, res, next) {
  WANDOMAIN.wanConfigurationWanDomainSearchPOST(req.swagger.params, res, next);
};
