'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.userDeviceDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userDeviceDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUserDevice.userDeviceDeletePOST', args, res)) {
        var mockup = require('../models/NacUserDeviceDTO');
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
exports.userDeviceGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userDeviceGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUserDevice.userDeviceGetPOST', args, res)) {
        var mockup = require('../models/NacUserDeviceDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NacUserDeviceListRequest)
**/
exports.userDeviceListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userDeviceListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUserDevice.userDeviceListPOST', args, res)) {
        var mockup = require('../models/NacUserDeviceDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NacUserDeviceRequest)
**/
exports.userDeviceSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userDeviceSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUserDevice.userDeviceSavePOST', args, res)) {
        var mockup = require('../models/NacUserDeviceDTO');
        var data = mockup.saveData(val.data);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NacUserDeviceSearchRequest)
**/
exports.userDeviceSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userDeviceSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUserDevice.userDeviceSearchPOST', args, res)) {
        var mockup = require('../models/NacUserDeviceDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

