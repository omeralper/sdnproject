'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (NetworkDeviceDeleteRequest)
**/
exports.networkDeviceDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "networkDeviceDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NetworkDevice.networkDeviceDeletePOST', args, res)) {
        var mockup = require('../models/NetworkDeviceDTO');
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
* request (NetworkDeviceRequest)
**/
exports.networkDeviceGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "networkDeviceGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NetworkDevice.networkDeviceGetPOST', args, res)) {
        var mockup = require('../models/NetworkDeviceDTO');
        var response = mockup.networkDeviceGet(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NetworkDeviceListRequest)
**/
exports.networkDeviceListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "networkDeviceListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NetworkDevice.networkDeviceListPOST', args, res)) {
        var mockup = require('../models/NetworkDeviceDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NetworkDeviceRequest)
**/
exports.networkDeviceSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "networkDeviceSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NetworkDevice.networkDeviceSavePOST', args, res)) {
        var mockup = require('../models/NetworkDeviceDTO');
        var data = mockup.saveData(val.data);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

