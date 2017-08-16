'use strict';

var url = require('url');


var NetworkDevice = require('./NetworkDeviceService');


module.exports.networkDeviceDeletePOST = function networkDeviceDeletePOST (req, res, next) {
  NetworkDevice.networkDeviceDeletePOST(req.swagger.params, res, next);
};

module.exports.networkDeviceGetPOST = function networkDeviceGetPOST (req, res, next) {
  NetworkDevice.networkDeviceGetPOST(req.swagger.params, res, next);
};

module.exports.networkDeviceListPOST = function networkDeviceListPOST (req, res, next) {
  NetworkDevice.networkDeviceListPOST(req.swagger.params, res, next);
};

module.exports.networkDeviceSavePOST = function networkDeviceSavePOST (req, res, next) {
  NetworkDevice.networkDeviceSavePOST(req.swagger.params, res, next);
};
