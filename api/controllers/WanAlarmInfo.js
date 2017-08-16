'use strict';

var url = require('url');


var WanAlarmInfo = require('./WanAlarmInfoService');


module.exports.wanAlarmListPOST = function wanAlarmListPOST (req, res, next) {
  WanAlarmInfo.wanAlarmListPOST(req.swagger.params, res, next);
};
