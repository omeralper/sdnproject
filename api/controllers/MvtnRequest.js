'use strict';

var url = require('url');


var MvtnRequest = require('./MvtnRequestService');


module.exports.mvtnRequestChangeEditStatusPOST = function mvtnRequestChangeEditStatusPOST (req, res, next) {
  MvtnRequest.mvtnRequestChangeEditStatusPOST(req.swagger.params, res, next);
};

module.exports.mvtnRequestDeletePOST = function mvtnRequestDeletePOST (req, res, next) {
  MvtnRequest.mvtnRequestDeletePOST(req.swagger.params, res, next);
};

module.exports.mvtnRequestGetPOST = function mvtnRequestGetPOST (req, res, next) {
  MvtnRequest.mvtnRequestGetPOST(req.swagger.params, res, next);
};

module.exports.mvtnRequestListPOST = function mvtnRequestListPOST (req, res, next) {
  MvtnRequest.mvtnRequestListPOST(req.swagger.params, res, next);
};

module.exports.mvtnRequestSavePOST = function mvtnRequestSavePOST (req, res, next) {
  MvtnRequest.mvtnRequestSavePOST(req.swagger.params, res, next);
};

module.exports.mvtnRequestSearchPOST = function mvtnRequestSearchPOST (req, res, next) {
  MvtnRequest.mvtnRequestSearchPOST(req.swagger.params, res, next);
};
