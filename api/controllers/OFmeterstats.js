'use strict';

var url = require('url');


var OFmeterstats = require('./OFmeterstatsService');


module.exports.meterStatsMeterPOST = function meterStatsMeterPOST (req, res, next) {
  OFmeterstats.meterStatsMeterPOST(req.swagger.params, res, next);
};
