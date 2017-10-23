'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericSearchRequest)
**/
exports.controllerDeviceSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "controllerDeviceSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Controller.controllerDeviceSearchPOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.controllerGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "controllerGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Controller.controllerGetPOST', args, res)) {
        var mockup = require('../models/ControllerNodeDTO');
        var response = mockup.ControllerNodeGet(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.controllerHaltPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "controllerHaltPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Controller.controllerHaltPOST', args, res)) {
        var mockup = require('../models/ControllerNodeDTO');
        var response = mockup.halt(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ControllerNodeRequest)
**/
exports.controllerSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "controllerSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Controller.controllerSavePOST', args, res)) {
        var mockup = require('../models/ControllerNodeDTO');
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
exports.controllerSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "controllerSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Controller.controllerSearchPOST', args, res)) {
        var mockup = require('../models/ControllerNodeDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

