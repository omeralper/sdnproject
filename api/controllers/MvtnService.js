'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (MvtnChangeStatusRequest)
**/
exports.virtualChangeStatusPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualChangeStatusPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Mvtn.virtualChangeStatusPOST', args, res)) {
        var mockup = require('../models/MvtnDTO');
        var response = mockup.changeStatus(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (MvtnChangeTypeRequest)
**/
exports.virtualChangeTypePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualChangeTypePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Mvtn.virtualChangeTypePOST', args, res)) {
        var mockup = require('../models/MvtnDTO');
        var response = mockup.changeType(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.virtualDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Mvtn.virtualDeletePOST', args, res)) {
        var mockup = require('../models/MvtnDTO');
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
exports.virtualGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Mvtn.virtualGetPOST', args, res)) {
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
* request (GenericIdRequest)
**/
exports.virtualGetParametersPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualGetParametersPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Mvtn.virtualGetParametersPOST', args, res)) {
        var mockup = require('../models/TopologyInfoDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (LinkRequest)
**/
exports.virtualLinkSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualLinkSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Mvtn.virtualLinkSavePOST', args, res)) {
        var mockup = require('../models/LinkDTO');
        var data = mockup.saveData(val.data);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (SwitchRequest)
**/
exports.virtualListAvailableDevicePortsPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualListAvailableDevicePortsPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Mvtn.virtualListAvailableDevicePortsPOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (DeviceProfileListRequest)
**/
exports.virtualListDeviceProfilesPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualListDeviceProfilesPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Mvtn.virtualListDeviceProfilesPOST', args, res)) {
        var mockup = require('../models/DeviceProfileDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericListRequest)
**/
exports.virtualListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Mvtn.virtualListPOST', args, res)) {
        var mockup = require('../models/MvtnDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (MvtnRequest)
**/
exports.virtualSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Mvtn.virtualSavePOST', args, res)) {
        var mockup = require('../models/MvtnDTO');
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
exports.virtualSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Mvtn.virtualSearchPOST', args, res)) {
        var mockup = require('../models/MvtnDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (UniquenessControlRequest)
**/
exports.virtualValidatePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualValidatePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Mvtn.virtualValidatePOST', args, res)) {
        var mockup = require('../models/UniquenessControlDTO');
        var response = mockup.validate(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

