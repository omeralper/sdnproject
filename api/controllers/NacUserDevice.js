'use strict';

var url = require('url');


var NacUserDevice = require('./NacUserDeviceService');


module.exports.userDeviceDeletePOST = function userDeviceDeletePOST (req, res, next) {
  NacUserDevice.userDeviceDeletePOST(req.swagger.params, res, next);
};

module.exports.userDeviceGetPOST = function userDeviceGetPOST (req, res, next) {
  NacUserDevice.userDeviceGetPOST(req.swagger.params, res, next);
};

module.exports.userDeviceListPOST = function userDeviceListPOST (req, res, next) {
  NacUserDevice.userDeviceListPOST(req.swagger.params, res, next);
};

module.exports.userDeviceSavePOST = function userDeviceSavePOST (req, res, next) {
  NacUserDevice.userDeviceSavePOST(req.swagger.params, res, next);
};

module.exports.userDeviceSearchPOST = function userDeviceSearchPOST (req, res, next) {
  NacUserDevice.userDeviceSearchPOST(req.swagger.params, res, next);
};
