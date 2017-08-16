'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (FlowDeleteRequest)
**/
exports.flowDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "flowDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Flows.flowDeletePOST', args, res)) {
        var mockup = require('../models/FlowDTO');
        var data = mockup.deleteData(val.options.id);
        if (!val.options.isReturnModel) {
            data = null;
        }
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (FlowListRequest)
**/
exports.flowListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "flowListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Flows.flowListPOST', args, res)) {
        var mockup = require('../models/FlowDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (FlowSearchRequest)
**/
exports.flowSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "flowSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Flows.flowSearchPOST', args, res)) {
        var mockup = require('../models/FlowDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

