'use strict';

var url = require('url');


var PrognetSdnip = require('./PrognetSdnipService');


module.exports.routerAsNumberGetPOST = function routerAsNumberGetPOST (req, res, next) {
  PrognetSdnip.routerAsNumberGetPOST(req.swagger.params, res, next);
};

module.exports.routerDeletePOST = function routerDeletePOST (req, res, next) {
  PrognetSdnip.routerDeletePOST(req.swagger.params, res, next);
};

module.exports.routerGetPOST = function routerGetPOST (req, res, next) {
  PrognetSdnip.routerGetPOST(req.swagger.params, res, next);
};

module.exports.routerNeighborDeletePOST = function routerNeighborDeletePOST (req, res, next) {
  PrognetSdnip.routerNeighborDeletePOST(req.swagger.params, res, next);
};

module.exports.routerNeighborGetPOST = function routerNeighborGetPOST (req, res, next) {
  PrognetSdnip.routerNeighborGetPOST(req.swagger.params, res, next);
};

module.exports.routerNeighborSavePOST = function routerNeighborSavePOST (req, res, next) {
  PrognetSdnip.routerNeighborSavePOST(req.swagger.params, res, next);
};

module.exports.routerNeighborSearchPOST = function routerNeighborSearchPOST (req, res, next) {
  PrognetSdnip.routerNeighborSearchPOST(req.swagger.params, res, next);
};

module.exports.routerNeighborStatusListPOST = function routerNeighborStatusListPOST (req, res, next) {
  PrognetSdnip.routerNeighborStatusListPOST(req.swagger.params, res, next);
};

module.exports.routerRouteSearchPOST = function routerRouteSearchPOST (req, res, next) {
  PrognetSdnip.routerRouteSearchPOST(req.swagger.params, res, next);
};

module.exports.routerSavePOST = function routerSavePOST (req, res, next) {
  PrognetSdnip.routerSavePOST(req.swagger.params, res, next);
};

module.exports.routerSearchPOST = function routerSearchPOST (req, res, next) {
  PrognetSdnip.routerSearchPOST(req.swagger.params, res, next);
};
