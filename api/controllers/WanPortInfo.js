'use strict';

var url = require('url');


var WanPortInfo = require('./WanPortInfoService');


module.exports.wanConfigurationWanPortInfoDeletePOST = function wanConfigurationWanPortInfoDeletePOST (req, res, next) {
  WanPortInfo.wanConfigurationWanPortInfoDeletePOST(req.swagger.params, res, next);
};

module.exports.wanConfigurationWanPortInfoGetPOST = function wanConfigurationWanPortInfoGetPOST (req, res, next) {
  WanPortInfo.wanConfigurationWanPortInfoGetPOST(req.swagger.params, res, next);
};

module.exports.wanConfigurationWanPortInfoSavePOST = function wanConfigurationWanPortInfoSavePOST (req, res, next) {
  WanPortInfo.wanConfigurationWanPortInfoSavePOST(req.swagger.params, res, next);
};

module.exports.wanConfigurationWanPortInfoSearchPOST = function wanConfigurationWanPortInfoSearchPOST (req, res, next) {
  WanPortInfo.wanConfigurationWanPortInfoSearchPOST(req.swagger.params, res, next);
};
