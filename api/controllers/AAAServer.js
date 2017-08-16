'use strict';

var url = require('url');


var AAAServer = require('./AAAServerService');


module.exports.serverDeletePOST = function serverDeletePOST (req, res, next) {
  AAAServer.serverDeletePOST(req.swagger.params, res, next);
};

module.exports.serverGetPOST = function serverGetPOST (req, res, next) {
  AAAServer.serverGetPOST(req.swagger.params, res, next);
};

module.exports.serverListPOST = function serverListPOST (req, res, next) {
  AAAServer.serverListPOST(req.swagger.params, res, next);
};

module.exports.serverSavePOST = function serverSavePOST (req, res, next) {
  AAAServer.serverSavePOST(req.swagger.params, res, next);
};

module.exports.serverSearchPOST = function serverSearchPOST (req, res, next) {
  AAAServer.serverSearchPOST(req.swagger.params, res, next);
};
