'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.aaaRoleDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaRoleDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAARoles.aaaRoleDeletePOST', args, res)) {
        var mockup = require('../models/RoleDTO');
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
exports.aaaRoleGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaRoleGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAARoles.aaaRoleGetPOST', args, res)) {
        var mockup = require('../models/RoleDTO');
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
exports.aaaRoleListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaRoleListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAARoles.aaaRoleListPOST', args, res)) {
        var mockup = require('../models/RoleDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (RoleRequest)
**/
exports.aaaRoleSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaRoleSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAARoles.aaaRoleSavePOST', args, res)) {
        var mockup = require('../models/RoleDTO');
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
exports.aaaRoleSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaRoleSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAARoles.aaaRoleSearchPOST', args, res)) {
        var mockup = require('../models/RoleDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

