'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.emergencyPolicyDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "emergencyPolicyDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.EmergencyPolicy.emergencyPolicyDeletePOST', args, res)) {
        var mockup = require('../models/EmercencyPolicyDTO');
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
exports.emergencyPolicyGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "emergencyPolicyGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.EmergencyPolicy.emergencyPolicyGetPOST', args, res)) {
        var mockup = require('../models/EmercencyPolicyDTO');
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
exports.emergencyPolicyListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "emergencyPolicyListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.EmergencyPolicy.emergencyPolicyListPOST', args, res)) {
        var mockup = require('../models/EmercencyPolicyDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (EmergencyPolicyRequest)
**/
exports.emergencyPolicySavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "emergencyPolicySavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.EmergencyPolicy.emergencyPolicySavePOST', args, res)) {
        var mockup = require('../models/EmercencyPolicyDTO');
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
exports.emergencyPolicySearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "emergencyPolicySearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.EmergencyPolicy.emergencyPolicySearchPOST', args, res)) {
        var mockup = require('../models/EmercencyPolicyDTO');
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
exports.emergencyPolicyStartStopVnfPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "emergencyPolicyStartStopVnfPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.EmergencyPolicy.emergencyPolicyStartStopVnfPOST', args, res)) {
        var mockup = require('../models/EmercencyPolicyDTO');
        var response = mockup.startStopVnf(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.emergencyPolicyStopProcessPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "emergencyPolicyStopProcessPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.EmergencyPolicy.emergencyPolicyStopProcessPOST', args, res)) {
        var mockup = require('../models/EmercencyPolicyDTO');
        var response = mockup.stopProcess(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

