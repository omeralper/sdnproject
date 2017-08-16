'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (MvtnEditChangeRequest)
**/
exports.mvtnRequestChangeEditStatusPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "mvtnRequestChangeEditStatusPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.MvtnRequest.mvtnRequestChangeEditStatusPOST', args, res)) {
        var mockup = require('../models/MvtnEditStatusDTO');
        var response = mockup.changeEditStatus(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (MvtnRequestDeleteRequest)
**/
exports.mvtnRequestDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "mvtnRequestDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.MvtnRequest.mvtnRequestDeletePOST', args, res)) {
        var mockup = require('../models/MvtnRequestDeleteDTO');
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
* request (TopologyRequest)
**/
exports.mvtnRequestGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "mvtnRequestGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.MvtnRequest.mvtnRequestGetPOST', args, res)) {
        var mockup = require('../models/TopologyDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (MvtnCreateRequest)
**/
exports.mvtnRequestListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "mvtnRequestListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.MvtnRequest.mvtnRequestListPOST', args, res)) {
        var mockup = require('../models/MvtnRequestDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (MvtnCreateRequest)
**/
exports.mvtnRequestSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "mvtnRequestSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.MvtnRequest.mvtnRequestSavePOST', args, res)) {
        var mockup = require('../models/MvtnRequestDTO');
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
exports.mvtnRequestSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "mvtnRequestSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.MvtnRequest.mvtnRequestSearchPOST', args, res)) {
        var mockup = require('../models/MvtnRequestDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

