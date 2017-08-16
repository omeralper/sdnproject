'use strict';

var url = require('url');


var Feature = require('./FeatureService');


module.exports.featureBatchSavePOST = function featureBatchSavePOST (req, res, next) {
  Feature.featureBatchSavePOST(req.swagger.params, res, next);
};

module.exports.featureSavePOST = function featureSavePOST (req, res, next) {
  Feature.featureSavePOST(req.swagger.params, res, next);
};

module.exports.featureSearchPOST = function featureSearchPOST (req, res, next) {
  Feature.featureSearchPOST(req.swagger.params, res, next);
};
