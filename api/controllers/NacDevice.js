'use strict';

var url = require('url');


var NacDevice = require('./NacDeviceService');


module.exports.deviceDeletePOST = function deviceDeletePOST (req, res, next) {
  NacDevice.deviceDeletePOST(req.swagger.params, res, next);
};

module.exports.deviceGetPOST = function deviceGetPOST (req, res, next) {
  NacDevice.deviceGetPOST(req.swagger.params, res, next);
};

module.exports.deviceListPOST = function deviceListPOST (req, res, next) {
  NacDevice.deviceListPOST(req.swagger.params, res, next);
};

module.exports.deviceSavePOST = function deviceSavePOST (req, res, next) {
  NacDevice.deviceSavePOST(req.swagger.params, res, next);
};

module.exports.deviceSearchPOST = function deviceSearchPOST (req, res, next) {
  NacDevice.deviceSearchPOST(req.swagger.params, res, next);
};
