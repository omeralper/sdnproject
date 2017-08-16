'use strict';

var url = require('url');


var Mvtn = require('./MvtnService');


module.exports.virtualChangeStatusPOST = function virtualChangeStatusPOST (req, res, next) {
  Mvtn.virtualChangeStatusPOST(req.swagger.params, res, next);
};

module.exports.virtualChangeTypePOST = function virtualChangeTypePOST (req, res, next) {
  Mvtn.virtualChangeTypePOST(req.swagger.params, res, next);
};

module.exports.virtualDeletePOST = function virtualDeletePOST (req, res, next) {
  Mvtn.virtualDeletePOST(req.swagger.params, res, next);
};

module.exports.virtualGetPOST = function virtualGetPOST (req, res, next) {
  Mvtn.virtualGetPOST(req.swagger.params, res, next);
};

module.exports.virtualGetParametersPOST = function virtualGetParametersPOST (req, res, next) {
  Mvtn.virtualGetParametersPOST(req.swagger.params, res, next);
};

module.exports.virtualLinkSavePOST = function virtualLinkSavePOST (req, res, next) {
  Mvtn.virtualLinkSavePOST(req.swagger.params, res, next);
};

module.exports.virtualListAvailableDevicePortsPOST = function virtualListAvailableDevicePortsPOST (req, res, next) {
  Mvtn.virtualListAvailableDevicePortsPOST(req.swagger.params, res, next);
};

module.exports.virtualListDeviceProfilesPOST = function virtualListDeviceProfilesPOST (req, res, next) {
  Mvtn.virtualListDeviceProfilesPOST(req.swagger.params, res, next);
};

module.exports.virtualListPOST = function virtualListPOST (req, res, next) {
  Mvtn.virtualListPOST(req.swagger.params, res, next);
};

module.exports.virtualSavePOST = function virtualSavePOST (req, res, next) {
  Mvtn.virtualSavePOST(req.swagger.params, res, next);
};

module.exports.virtualSearchPOST = function virtualSearchPOST (req, res, next) {
  Mvtn.virtualSearchPOST(req.swagger.params, res, next);
};

module.exports.virtualValidatePOST = function virtualValidatePOST (req, res, next) {
  Mvtn.virtualValidatePOST(req.swagger.params, res, next);
};
