'use strict';

var url = require('url');


var Paths = require('./PathsService');


module.exports.pathDeletePOST = function pathDeletePOST (req, res, next) {
  Paths.pathDeletePOST(req.swagger.params, res, next);
};

module.exports.pathGetPOST = function pathGetPOST (req, res, next) {
  Paths.pathGetPOST(req.swagger.params, res, next);
};

module.exports.pathListPOST = function pathListPOST (req, res, next) {
  Paths.pathListPOST(req.swagger.params, res, next);
};

module.exports.pathSavePOST = function pathSavePOST (req, res, next) {
  Paths.pathSavePOST(req.swagger.params, res, next);
};

module.exports.pathValidatePOST = function pathValidatePOST (req, res, next) {
  Paths.pathValidatePOST(req.swagger.params, res, next);
};
