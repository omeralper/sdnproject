'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (MonitorAlarmSetRequest)
**/
exports.monitorAlarmSetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "monitorAlarmSetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Monitor.monitorAlarmSetPOST', args, res)) {
        var mockup = require('../models/MonitorAlarmSetDTO');
        var response = mockup.alarmSet(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdListRequest)
**/
exports.monitorGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "monitorGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Monitor.monitorGetPOST', args, res)) {
        var mockup = require('../models/MonitorValueDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (MonitorSelectRequest)
**/
exports.monitorSelectPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "monitorSelectPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Monitor.monitorSelectPOST', args, res)) {
        var mockup = require('../models/MonitorInfoDTO');
        var response = mockup.select(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

