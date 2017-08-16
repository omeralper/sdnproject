'use strict';

var url = require('url');


var Vnfr = require('./VnfrService');


module.exports.sfcVnfrDeletePOST = function sfcVnfrDeletePOST (req, res, next) {
  Vnfr.sfcVnfrDeletePOST(req.swagger.params, res, next);
};

module.exports.sfcVnfrGetPOST = function sfcVnfrGetPOST (req, res, next) {
  Vnfr.sfcVnfrGetPOST(req.swagger.params, res, next);
};

module.exports.sfcVnfrListPOST = function sfcVnfrListPOST (req, res, next) {
  Vnfr.sfcVnfrListPOST(req.swagger.params, res, next);
};

module.exports.sfcVnfrSavePOST = function sfcVnfrSavePOST (req, res, next) {
  Vnfr.sfcVnfrSavePOST(req.swagger.params, res, next);
};
