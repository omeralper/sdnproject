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

    if (!proxy.run('services.Log.logLevelListPOST', args, res)) {
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

    if (!proxy.run('services.Log.logLevelUpdatePOST', args, res)) {
        var mockup = require('../models/LogLevelDTO');
        mockup.saveListData(val.data);
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* requestList (SaveLogListRequest)
**/
exports.logSaveListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "logSaveListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Log.logSaveListPOST', args, res)) {
        var mockup = require('../models/LogDTO');
        mockup.saveListData(val.data);
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (SaveLogRequest)
**/
exports.logSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "logSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Log.logSavePOST', args, res)) {
        var mockup = require('../models/LogDTO');
        var data = mockup.saveData(val.data);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

