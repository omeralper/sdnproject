'use strict';

var url = require('url');


var PrognetDevice = require('./PrognetDeviceService');


module.exports.controllerDeviceAssignPOST = function controllerDeviceAssignPOST (req, res, next) {
  PrognetDevice.controllerDeviceAssignPOST(req.swagger.params, res, next);
};

module.exports.controllerDeviceUnassignPOST = function controllerDeviceUnassignPOST (req, res, next) {
  PrognetDevice.controllerDeviceUnassignPOST(req.swagger.params, res, next);
};

module.exports.deviceControllerSearchPOST = function deviceControllerSearchPOST (req, res, next) {
  PrognetDevice.deviceControllerSearchPOST(req.swagger.params, res, next);
};

module.exports.deviceDeletePOST = function deviceDeletePOST (req, res, next) {
  PrognetDevice.deviceDeletePOST(req.swagger.params, res, next);
};

module.exports.deviceGetPOST = function deviceGetPOST (req, res, next) {
  PrognetDevice.deviceGetPOST(req.swagger.params, res, next);
};

module.exports.deviceGroupPOST = function deviceGroupPOST (req, res, next) {
  PrognetDevice.deviceGroupPOST(req.swagger.params, res, next);
};

module.exports.deviceSavePOST = function deviceSavePOST (req, res, next) {
  PrognetDevice.deviceSavePOST(req.swagger.params, res, next);
};

module.exports.deviceSearchPOST = function deviceSearchPOST (req, res, next) {
  PrognetDevice.deviceSearchPOST(req.swagger.params, res, next);
};
