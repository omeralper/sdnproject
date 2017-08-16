'use strict';

var url = require('url');


var ProactivePathPolicy = require('./ProactivePathPolicyService');


module.exports.proactiveDeletePOST = function proactiveDeletePOST (req, res, next) {
  ProactivePathPolicy.proactiveDeletePOST(req.swagger.params, res, next);
};

module.exports.proactiveGetPOST = function proactiveGetPOST (req, res, next) {
  ProactivePathPolicy.proactiveGetPOST(req.swagger.params, res, next);
};

module.exports.proactiveListPOST = function proactiveListPOST (req, res, next) {
  ProactivePathPolicy.proactiveListPOST(req.swagger.params, res, next);
};

module.exports.proactiveSavePOST = function proactiveSavePOST (req, res, next) {
  ProactivePathPolicy.proactiveSavePOST(req.swagger.params, res, next);
};

module.exports.proactiveSearchPOST = function proactiveSearchPOST (req, res, next) {
  ProactivePathPolicy.proactiveSearchPOST(req.swagger.params, res, next);
};
