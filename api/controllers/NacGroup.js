'use strict';

var url = require('url');


var NacGroup = require('./NacGroupService');


module.exports.groupDeletePOST = function groupDeletePOST (req, res, next) {
  NacGroup.groupDeletePOST(req.swagger.params, res, next);
};

module.exports.groupGetPOST = function groupGetPOST (req, res, next) {
  NacGroup.groupGetPOST(req.swagger.params, res, next);
};

module.exports.groupListPOST = function groupListPOST (req, res, next) {
  NacGroup.groupListPOST(req.swagger.params, res, next);
};

module.exports.groupSavePOST = function groupSavePOST (req, res, next) {
  NacGroup.groupSavePOST(req.swagger.params, res, next);
};

module.exports.groupSearchPOST = function groupSearchPOST (req, res, next) {
  NacGroup.groupSearchPOST(req.swagger.params, res, next);
};
