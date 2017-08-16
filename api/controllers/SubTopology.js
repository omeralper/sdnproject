'use strict';

var url = require('url');


var SubTopology = require('./SubTopologyService');


module.exports.mvtnRequestGetSubPOST = function mvtnRequestGetSubPOST (req, res, next) {
  SubTopology.mvtnRequestGetSubPOST(req.swagger.params, res, next);
};

module.exports.topologyGetSubPOST = function topologyGetSubPOST (req, res, next) {
  SubTopology.topologyGetSubPOST(req.swagger.params, res, next);
};

module.exports.virtualGetSubPOST = function virtualGetSubPOST (req, res, next) {
  SubTopology.virtualGetSubPOST(req.swagger.params, res, next);
};

module.exports.virtualSaveSubPOST = function virtualSaveSubPOST (req, res, next) {
  SubTopology.virtualSaveSubPOST(req.swagger.params, res, next);
};
