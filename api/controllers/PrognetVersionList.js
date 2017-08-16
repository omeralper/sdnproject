'use strict';

var url = require('url');


var PrognetVersionList = require('./PrognetVersionListService');


module.exports.versionListPOST = function versionListPOST (req, res, next) {
  PrognetVersionList.versionListPOST(req.swagger.params, res, next);
};
