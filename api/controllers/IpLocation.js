'use strict';

var url = require('url');


var IpLocation = require('./IpLocationService');


module.exports.ipLocationDeletePOST = function ipLocationDeletePOST (req, res, next) {
  IpLocation.ipLocationDeletePOST(req.swagger.params, res, next);
};

module.exports.ipLocationListPOST = function ipLocationListPOST (req, res, next) {
  IpLocation.ipLocationListPOST(req.swagger.params, res, next);
};

module.exports.ipLocationSavePOST = function ipLocationSavePOST (req, res, next) {
  IpLocation.ipLocationSavePOST(req.swagger.params, res, next);
};

module.exports.ipLocationSearchPOST = function ipLocationSearchPOST (req, res, next) {
  IpLocation.ipLocationSearchPOST(req.swagger.params, res, next);
};
