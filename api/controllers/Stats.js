'use strict';

var url = require('url');


var Stats = require('./StatsService');


module.exports.hostStatsHostPOST = function hostStatsHostPOST (req, res, next) {
  Stats.hostStatsHostPOST(req.swagger.params, res, next);
};

module.exports.linkStatsLinkPOST = function linkStatsLinkPOST (req, res, next) {
  Stats.linkStatsLinkPOST(req.swagger.params, res, next);
};

module.exports.portStatsPortPOST = function portStatsPortPOST (req, res, next) {
  Stats.portStatsPortPOST(req.swagger.params, res, next);
};

module.exports.portStatsSwitchPOST = function portStatsSwitchPOST (req, res, next) {
  Stats.portStatsSwitchPOST(req.swagger.params, res, next);
};
