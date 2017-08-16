'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.pathDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "pathDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Paths.pathDeletePOST', args, res)) {
        var mockup = require('../models/PathDTO');
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
* request (PathRequest)
**/
exports.pathGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "pathGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Paths.pathGetPOST', args, res)) {
        var mockup = require('../models/PathDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (PathListRequest)
**/
exports.pathListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "pathListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Paths.pathListPOST', args, res)) {
        var mockup = require('../models/PathDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (PathRequest)
**/
exports.pathSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "pathSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Paths.pathSavePOST', args, res)) {
        var mockup = require('../models/PathDTO');
        var data = mockup.saveData(val.data);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (PathRequest)
**/
exports.pathValidatePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "pathValidatePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Paths.pathValidatePOST', args, res)) {
        var mockup = require('../models/PathDTO');
        var response = mockup.validate(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

