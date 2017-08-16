'use strict';

var url = require('url');


var EdrListAndSearch = require('./EdrListAndSearchService');


module.exports.edrWebSearchPOST = function edrWebSearchPOST (req, res, next) {
  EdrListAndSearch.edrWebSearchPOST(req.swagger.params, res, next);
};
