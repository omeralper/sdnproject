'use strict';

var url = require('url');


var Flows = require('./FlowsService');


module.exports.flowDeletePOST = function flowDeletePOST (req, res, next) {
  Flows.flowDeletePOST(req.swagger.params, res, next);
};

module.exports.flowListPOST = function flowListPOST (req, res, next) {
  Flows.flowListPOST(req.swagger.params, res, next);
};

module.exports.flowSearchPOST = function flowSearchPOST (req, res, next) {
  Flows.flowSearchPOST(req.swagger.params, res, next);
};
