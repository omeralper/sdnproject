'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.deviceDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "deviceDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacDevice.deviceDeletePOST', args, res)) {
        var mockup = require('../models/NacDeviceDTO');
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

    if (!proxy.run('services.NacDevice.deviceGetPOST', args, res)) {
        var mockup = require('../models/NacDeviceDTO');
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
exports.deviceListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "deviceListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacDevice.deviceListPOST', args, res)) {
        var mockup = require('../models/NacDeviceDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (DeviceQuarantineRequest)
**/
exports.deviceQuarantinePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "deviceQuarantinePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacDevice.deviceQuarantinePOST', args, res)) {
        var mockup = require('../models/DeviceQuarantineDTO');
        var response = mockup.quarantine(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NacDeviceRequest)
**/
exports.deviceSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "deviceSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacDevice.deviceSavePOST', args, res)) {
        var mockup = require('../models/NacDeviceDTO');
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

    if (!proxy.run('services.NacDevice.deviceSearchPOST', args, res)) {
        var mockup = require('../models/NacDeviceDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

