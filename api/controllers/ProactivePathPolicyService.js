'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.proactiveDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "proactiveDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.ProactivePathPolicy.proactiveDeletePOST', args, res)) {
        var mockup = require('../models/ProactivePathPolicyDTO');
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
* request (ProactivePathPolicyRequest)
**/
exports.proactiveGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "proactiveGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.ProactivePathPolicy.proactiveGetPOST', args, res)) {
        var mockup = require('../models/ProactivePathPolicyDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericListRequest)
**/
exports.proactiveListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "proactiveListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.ProactivePathPolicy.proactiveListPOST', args, res)) {
        var mockup = require('../models/ProactivePathPolicyDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ProactivePathPolicyRequest)
**/
exports.proactiveSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "proactiveSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.ProactivePathPolicy.proactiveSavePOST', args, res)) {
        var mockup = require('../models/ProactivePathPolicyDTO');
        var data = mockup.saveData(val.data);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericSearchRequest)
**/
exports.proactiveSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "proactiveSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.ProactivePathPolicy.proactiveSearchPOST', args, res)) {
        var mockup = require('../models/ProactivePathPolicyDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

