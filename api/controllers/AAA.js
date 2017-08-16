'use strict';

var url = require('url');


var AAA = require('./AAAService');


module.exports.aaaLoginPOST = function aaaLoginPOST (req, res, next) {
  AAA.aaaLoginPOST(req.swagger.params, res, next);
};

module.exports.aaaLogoutPOST = function aaaLogoutPOST (req, res, next) {
  AAA.aaaLogoutPOST(req.swagger.params, res, next);
};

module.exports.aaaLostpwdPOST = function aaaLostpwdPOST (req, res, next) {
  AAA.aaaLostpwdPOST(req.swagger.params, res, next);
};

module.exports.aaaPingPOST = function aaaPingPOST (req, res, next) {
  AAA.aaaPingPOST(req.swagger.params, res, next);
};
