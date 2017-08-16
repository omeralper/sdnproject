'use strict';

var url = require('url');


var WanMvtnInfo = require('./WanMvtnInfoService');


module.exports.wanMvtnCreatePOST = function wanMvtnCreatePOST (req, res, next) {
  WanMvtnInfo.wanMvtnCreatePOST(req.swagger.params, res, next);
};

module.exports.wanMvtnDeletePOST = function wanMvtnDeletePOST (req, res, next) {
  WanMvtnInfo.wanMvtnDeletePOST(req.swagger.params, res, next);
};

module.exports.wanMvtnListPOST = function wanMvtnListPOST (req, res, next) {
  WanMvtnInfo.wanMvtnListPOST(req.swagger.params, res, next);
};
