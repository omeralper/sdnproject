'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (LogLevelListRequest)
**/
exports.logLevelListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "logLevelListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.LogNM.logLevelListPOST', args, res)) {
        var mockup = require('../models/LogLevelDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (LogLevelRequest)
**/
exports.logLevelUpdatePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "logLevelUpdatePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.LogNM.logLevelUpdatePOST', args, res)) {
        var mockup = require('../models/LogLevelDTO');
        mockup.saveListData(val.data);
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

