'use strict';

var url = require('url');


var Controller = require('./ControllerService');


module.exports.controllerDeviceSearchPOST = function controllerDeviceSearchPOST (req, res, next) {
  Controller.controllerDeviceSearchPOST(req.swagger.params, res, next);
};

module.exports.controllerGetPOST = function controllerGetPOST (req, res, next) {
  Controller.controllerGetPOST(req.swagger.params, res, next);
};

module.exports.controllerHaltPOST = function controllerHaltPOST (req, res, next) {
  Controller.controllerHaltPOST(req.swagger.params, res, next);
};

module.exports.controllerSavePOST = function controllerSavePOST (req, res, next) {
  Controller.controllerSavePOST(req.swagger.params, res, next);
};

module.exports.controllerSearchPOST = function controllerSearchPOST (req, res, next) {
  Controller.controllerSearchPOST(req.swagger.params, res, next);
};
