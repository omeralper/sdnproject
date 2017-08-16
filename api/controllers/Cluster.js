'use strict';

var url = require('url');


var Cluster = require('./ClusterService');


module.exports.clusterSearchPOST = function clusterSearchPOST (req, res, next) {
  Cluster.clusterSearchPOST(req.swagger.params, res, next);
};
