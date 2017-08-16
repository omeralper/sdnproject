'use strict';

var url = require('url');


var OVSDB = require('./OVSDBService');


module.exports.prognetOvsdbAddBridgePOST = function prognetOvsdbAddBridgePOST (req, res, next) {
  OVSDB.prognetOvsdbAddBridgePOST(req.swagger.params, res, next);
};

module.exports.prognetOvsdbAddControllersPOST = function prognetOvsdbAddControllersPOST (req, res, next) {
  OVSDB.prognetOvsdbAddControllersPOST(req.swagger.params, res, next);
};

module.exports.prognetOvsdbGetControllersPOST = function prognetOvsdbGetControllersPOST (req, res, next) {
  OVSDB.prognetOvsdbGetControllersPOST(req.swagger.params, res, next);
};

module.exports.prognetOvsdbGetPortDescriptionPOST = function prognetOvsdbGetPortDescriptionPOST (req, res, next) {
  OVSDB.prognetOvsdbGetPortDescriptionPOST(req.swagger.params, res, next);
};

module.exports.prognetOvsdbGetPortNumberPOST = function prognetOvsdbGetPortNumberPOST (req, res, next) {
  OVSDB.prognetOvsdbGetPortNumberPOST(req.swagger.params, res, next);
};

module.exports.prognetOvsdbRemoveControllersPOST = function prognetOvsdbRemoveControllersPOST (req, res, next) {
  OVSDB.prognetOvsdbRemoveControllersPOST(req.swagger.params, res, next);
};

module.exports.prognetOvsdbSetControllersPOST = function prognetOvsdbSetControllersPOST (req, res, next) {
  OVSDB.prognetOvsdbSetControllersPOST(req.swagger.params, res, next);
};
