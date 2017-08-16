'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (ChangePwdRequest)
**/
exports.aaaUserChangepwdPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaUserChangepwdPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAAUsers.aaaUserChangepwdPOST', args, res)) {
        var mockup = require('../models/UserDTO');
        var response = mockup.changepwd(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (UsernameRequest)
**/
exports.aaaUserCheckusrPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaUserCheckusrPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAAUsers.aaaUserCheckusrPOST', args, res)) {
        var mockup = require('../models/UserDTO');
        var response = mockup.checkusr(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.aaaUserDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaUserDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAAUsers.aaaUserDeletePOST', args, res)) {
        var mockup = require('../models/UserDTO');
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
exports.aaaUserGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaUserGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAAUsers.aaaUserGetPOST', args, res)) {
        var mockup = require('../models/UserDTO');
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
exports.aaaUserListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaUserListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAAUsers.aaaUserListPOST', args, res)) {
        var mockup = require('../models/UserDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (UserRequest)
**/
exports.aaaUserSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaUserSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAAUsers.aaaUserSavePOST', args, res)) {
        var mockup = require('../models/UserDTO');
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
exports.aaaUserSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaUserSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAAUsers.aaaUserSearchPOST', args, res)) {
        var mockup = require('../models/UserDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (SetPwdRequest)
**/
exports.aaaUserSetpwdPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaUserSetpwdPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAAUsers.aaaUserSetpwdPOST', args, res)) {
        var mockup = require('../models/UserDTO');
        var response = mockup.setpwd(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

