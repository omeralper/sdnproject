'use strict';

var url = require('url');


var EmergencyPolicy = require('./EmergencyPolicyService');


module.exports.emergencyPolicyDeletePOST = function emergencyPolicyDeletePOST (req, res, next) {
  EmergencyPolicy.emergencyPolicyDeletePOST(req.swagger.params, res, next);
};

module.exports.emergencyPolicyGetPOST = function emergencyPolicyGetPOST (req, res, next) {
  EmergencyPolicy.emergencyPolicyGetPOST(req.swagger.params, res, next);
};

module.exports.emergencyPolicyListPOST = function emergencyPolicyListPOST (req, res, next) {
  EmergencyPolicy.emergencyPolicyListPOST(req.swagger.params, res, next);
};

module.exports.emergencyPolicySavePOST = function emergencyPolicySavePOST (req, res, next) {
  EmergencyPolicy.emergencyPolicySavePOST(req.swagger.params, res, next);
};

module.exports.emergencyPolicySearchPOST = function emergencyPolicySearchPOST (req, res, next) {
  EmergencyPolicy.emergencyPolicySearchPOST(req.swagger.params, res, next);
};

module.exports.emergencyPolicyStartStopVnfPOST = function emergencyPolicyStartStopVnfPOST (req, res, next) {
  EmergencyPolicy.emergencyPolicyStartStopVnfPOST(req.swagger.params, res, next);
};

module.exports.emergencyPolicyStopProcessPOST = function emergencyPolicyStopProcessPOST (req, res, next) {
  EmergencyPolicy.emergencyPolicyStopProcessPOST(req.swagger.params, res, next);
};
