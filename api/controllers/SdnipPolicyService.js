'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.sdnipPolicyAssignmentGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipPolicyAssignmentGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SdnipPolicy.sdnipPolicyAssignmentGetPOST', args, res)) {
        var mockup = require('../models/SdnipPolicyAssignmentDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (SdnipPolicyAssignmentSaveRequest)
**/
exports.sdnipPolicyAssignmentSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipPolicyAssignmentSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SdnipPolicy.sdnipPolicyAssignmentSavePOST', args, res)) {
        var mockup = require('../models/SdnipPolicyAssignmentDTO');
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
exports.sdnipPolicyAssignmentSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipPolicyAssignmentSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SdnipPolicy.sdnipPolicyAssignmentSearchPOST', args, res)) {
        var mockup = require('../models/SdnipPolicyAssignmentDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.sdnipPolicyDefinedSetDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipPolicyDefinedSetDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SdnipPolicy.sdnipPolicyDefinedSetDeletePOST', args, res)) {
        var mockup = require('../models/SdnipDefinedSetDTO');
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
exports.sdnipPolicyDefinedSetGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipPolicyDefinedSetGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SdnipPolicy.sdnipPolicyDefinedSetGetPOST', args, res)) {
        var mockup = require('../models/SdnipDefinedSetDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (SdnipDefinedSetSaveRequest)
**/
exports.sdnipPolicyDefinedSetSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipPolicyDefinedSetSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SdnipPolicy.sdnipPolicyDefinedSetSavePOST', args, res)) {
        var mockup = require('../models/SdnipDefinedSetDTO');
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
exports.sdnipPolicyDefinedSetSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipPolicyDefinedSetSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SdnipPolicy.sdnipPolicyDefinedSetSearchPOST', args, res)) {
        var mockup = require('../models/SdnipDefinedSetDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.sdnipPolicyDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipPolicyDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SdnipPolicy.sdnipPolicyDeletePOST', args, res)) {
        var mockup = require('../models/SdnipPolicyDTO');
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
exports.sdnipPolicyGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipPolicyGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SdnipPolicy.sdnipPolicyGetPOST', args, res)) {
        var mockup = require('../models/SdnipPolicyDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (SdnipPolicySaveRequest)
**/
exports.sdnipPolicySavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipPolicySavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SdnipPolicy.sdnipPolicySavePOST', args, res)) {
        var mockup = require('../models/SdnipPolicyDTO');
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
exports.sdnipPolicySearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipPolicySearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SdnipPolicy.sdnipPolicySearchPOST', args, res)) {
        var mockup = require('../models/SdnipPolicyDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

