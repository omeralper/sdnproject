'use strict';

var url = require('url');


var Topology = require('./TopologyService');


module.exports.topologyControllerListPOST = function topologyControllerListPOST (req, res, next) {
  Topology.topologyControllerListPOST(req.swagger.params, res, next);
};

module.exports.topologyDeletePOST = function topologyDeletePOST (req, res, next) {
  Topology.topologyDeletePOST(req.swagger.params, res, next);
};

module.exports.topologyEnableDiscoveryPOST = function topologyEnableDiscoveryPOST (req, res, next) {
  Topology.topologyEnableDiscoveryPOST(req.swagger.params, res, next);
};

module.exports.topologyGetPOST = function topologyGetPOST (req, res, next) {
  Topology.topologyGetPOST(req.swagger.params, res, next);
};

module.exports.topologyLinkDeletePOST = function topologyLinkDeletePOST (req, res, next) {
  Topology.topologyLinkDeletePOST(req.swagger.params, res, next);
};

module.exports.topologyLinkGetPOST = function topologyLinkGetPOST (req, res, next) {
  Topology.topologyLinkGetPOST(req.swagger.params, res, next);
};

module.exports.topologyLinkListPOST = function topologyLinkListPOST (req, res, next) {
  Topology.topologyLinkListPOST(req.swagger.params, res, next);
};

module.exports.topologyLinkSavePOST = function topologyLinkSavePOST (req, res, next) {
  Topology.topologyLinkSavePOST(req.swagger.params, res, next);
};

module.exports.topologyLinkSearchPOST = function topologyLinkSearchPOST (req, res, next) {
  Topology.topologyLinkSearchPOST(req.swagger.params, res, next);
};

module.exports.topologyListPOST = function topologyListPOST (req, res, next) {
  Topology.topologyListPOST(req.swagger.params, res, next);
};

module.exports.topologyLiteControllerListPOST = function topologyLiteControllerListPOST (req, res, next) {
  Topology.topologyLiteControllerListPOST(req.swagger.params, res, next);
};

module.exports.topologySwitchDeletePOST = function topologySwitchDeletePOST (req, res, next) {
  Topology.topologySwitchDeletePOST(req.swagger.params, res, next);
};

module.exports.topologySwitchGetPOST = function topologySwitchGetPOST (req, res, next) {
  Topology.topologySwitchGetPOST(req.swagger.params, res, next);
};

module.exports.topologySwitchListPOST = function topologySwitchListPOST (req, res, next) {
  Topology.topologySwitchListPOST(req.swagger.params, res, next);
};

module.exports.topologySwitchSavePOST = function topologySwitchSavePOST (req, res, next) {
  Topology.topologySwitchSavePOST(req.swagger.params, res, next);
};

module.exports.topologySwitchSearchPOST = function topologySwitchSearchPOST (req, res, next) {
  Topology.topologySwitchSearchPOST(req.swagger.params, res, next);
};
