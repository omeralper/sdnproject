'use strict';

var url = require('url');


var Vnfd = require('./VnfdService');


module.exports.sfcVnfdListPOST = function sfcVnfdListPOST (req, res, next) {
  Vnfd.sfcVnfdListPOST(req.swagger.params, res, next);
};
