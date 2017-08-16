'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (PrognetDeviceRequest)
**/
exports.controllerDeviceAssignPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "controllerDeviceAssignPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetDevice.controllerDeviceAssignPOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
        var response = mockup.assign(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (PrognetDeviceRequest)
**/
exports.controllerDeviceUnassignPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "controllerDeviceUnassignPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetDevice.controllerDeviceUnassignPOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
        var response = mockup.unassign(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericSearchRequest)
**/
exports.deviceControllerSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "deviceControllerSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetDevice.deviceControllerSearchPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.deviceDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "deviceDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetDevice.deviceDeletePOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
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
* request (GenericIdRequest)
**/
exports.deviceGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "deviceGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetDevice.deviceGetPOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (PrognetDeviceListRequest)
**/
exports.deviceGroupPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "deviceGroupPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetDevice.deviceGroupPOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
        var response = mockup.group(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (PrognetDeviceRequest)
**/
exports.deviceSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "deviceSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetDevice.deviceSavePOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
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
exports.deviceSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "deviceSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetDevice.deviceSearchPOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

