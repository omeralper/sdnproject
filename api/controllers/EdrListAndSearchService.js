'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (EdrSearchRequest)
**/
exports.edrWebSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "edrWebSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.EdrListAndSearch.edrWebSearchPOST', args, res)) {
        var mockup = require('../models/EdrDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

