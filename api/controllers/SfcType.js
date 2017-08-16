'use strict';

var url = require('url');


var SfcType = require('./SfcTypeService');


module.exports.sfcSfcTypeListPOST = function sfcSfcTypeListPOST (req, res, next) {
  SfcType.sfcSfcTypeListPOST(req.swagger.params, res, next);
};
