'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (OvsdbAddBridgeRequest)
**/
exports.prognetOvsdbAddBridgePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "prognetOvsdbAddBridgePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.OVSDB.prognetOvsdbAddBridgePOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (OvsdbControllerRequest)
**/
exports.prognetOvsdbAddControllersPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "prognetOvsdbAddControllersPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.OVSDB.prognetOvsdbAddControllersPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (OvsdbControllerInfoRequest)
**/
exports.prognetOvsdbGetControllersPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "prognetOvsdbGetControllersPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.OVSDB.prognetOvsdbGetControllersPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (OvsdbBridgeRequest)
**/
exports.prognetOvsdbGetPortDescriptionPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "prognetOvsdbGetPortDescriptionPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.OVSDB.prognetOvsdbGetPortDescriptionPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (OvsdbBridgeRequest)
**/
exports.prognetOvsdbGetPortNumberPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "prognetOvsdbGetPortNumberPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.OVSDB.prognetOvsdbGetPortNumberPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (OvsdbControllerRequest)
**/
exports.prognetOvsdbRemoveControllersPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "prognetOvsdbRemoveControllersPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.OVSDB.prognetOvsdbRemoveControllersPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (OvsdbControllerRequest)
**/
exports.prognetOvsdbSetControllersPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "prognetOvsdbSetControllersPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.OVSDB.prognetOvsdbSetControllersPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

