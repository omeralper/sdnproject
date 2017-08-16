'use strict';

var url = require('url');


var Sfc = require('./SfcService');


module.exports.sfcChainDeletePOST = function sfcChainDeletePOST (req, res, next) {
  Sfc.sfcChainDeletePOST(req.swagger.params, res, next);
};

module.exports.sfcChainGetPOST = function sfcChainGetPOST (req, res, next) {
  Sfc.sfcChainGetPOST(req.swagger.params, res, next);
};

module.exports.sfcChainListPOST = function sfcChainListPOST (req, res, next) {
  Sfc.sfcChainListPOST(req.swagger.params, res, next);
};

module.exports.sfcChainSavePOST = function sfcChainSavePOST (req, res, next) {
  Sfc.sfcChainSavePOST(req.swagger.params, res, next);
};

module.exports.sfcChainSearchPOST = function sfcChainSearchPOST (req, res, next) {
  Sfc.sfcChainSearchPOST(req.swagger.params, res, next);
};
