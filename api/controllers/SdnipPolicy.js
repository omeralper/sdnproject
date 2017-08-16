'use strict';

var url = require('url');


var SdnipPolicy = require('./SdnipPolicyService');


module.exports.sdnipPolicyAssignmentGetPOST = function sdnipPolicyAssignmentGetPOST (req, res, next) {
  SdnipPolicy.sdnipPolicyAssignmentGetPOST(req.swagger.params, res, next);
};

module.exports.sdnipPolicyAssignmentSavePOST = function sdnipPolicyAssignmentSavePOST (req, res, next) {
  SdnipPolicy.sdnipPolicyAssignmentSavePOST(req.swagger.params, res, next);
};

module.exports.sdnipPolicyAssignmentSearchPOST = function sdnipPolicyAssignmentSearchPOST (req, res, next) {
  SdnipPolicy.sdnipPolicyAssignmentSearchPOST(req.swagger.params, res, next);
};

module.exports.sdnipPolicyDefinedSetDeletePOST = function sdnipPolicyDefinedSetDeletePOST (req, res, next) {
  SdnipPolicy.sdnipPolicyDefinedSetDeletePOST(req.swagger.params, res, next);
};

module.exports.sdnipPolicyDefinedSetGetPOST = function sdnipPolicyDefinedSetGetPOST (req, res, next) {
  SdnipPolicy.sdnipPolicyDefinedSetGetPOST(req.swagger.params, res, next);
};

module.exports.sdnipPolicyDefinedSetSavePOST = function sdnipPolicyDefinedSetSavePOST (req, res, next) {
  SdnipPolicy.sdnipPolicyDefinedSetSavePOST(req.swagger.params, res, next);
};

module.exports.sdnipPolicyDefinedSetSearchPOST = function sdnipPolicyDefinedSetSearchPOST (req, res, next) {
  SdnipPolicy.sdnipPolicyDefinedSetSearchPOST(req.swagger.params, res, next);
};

module.exports.sdnipPolicyDeletePOST = function sdnipPolicyDeletePOST (req, res, next) {
  SdnipPolicy.sdnipPolicyDeletePOST(req.swagger.params, res, next);
};

module.exports.sdnipPolicyGetPOST = function sdnipPolicyGetPOST (req, res, next) {
  SdnipPolicy.sdnipPolicyGetPOST(req.swagger.params, res, next);
};

module.exports.sdnipPolicySavePOST = function sdnipPolicySavePOST (req, res, next) {
  SdnipPolicy.sdnipPolicySavePOST(req.swagger.params, res, next);
};

module.exports.sdnipPolicySearchPOST = function sdnipPolicySearchPOST (req, res, next) {
  SdnipPolicy.sdnipPolicySearchPOST(req.swagger.params, res, next);
};
