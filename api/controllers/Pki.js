'use strict';

var url = require('url');


var Pki = require('./PkiService');


module.exports.pkiNodeCertCreatePOST = function pkiNodeCertCreatePOST (req, res, next) {
  Pki.pkiNodeCertCreatePOST(req.swagger.params, res, next);
};
