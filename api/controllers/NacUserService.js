'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (NacChangeUserPwdRequest)
**/
exports.changepwdPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "changepwdPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUser.changepwdPOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
        var response = mockup.changepwd(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NacSetUserPwdRequest)
**/
exports.setpwdPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "setpwdPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUser.setpwdPOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
        var response = mockup.setpwd(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NacUsernameRequest)
**/
exports.userCheckusrPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userCheckusrPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUser.userCheckusrPOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
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
exports.userDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUser.userDeletePOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
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
* request (NacForgettenPasswordRequest)
**/
exports.userForgetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userForgetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUser.userForgetPOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
        var response = mockup.forget(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.userGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUser.userGetPOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
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
exports.userListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUser.userListPOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NacUserRequest)
**/
exports.userSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUser.userSavePOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
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
exports.userSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUser.userSearchPOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NacUserStatusRequest)
**/
exports.userStatusPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "userStatusPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacUser.userStatusPOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
        var response = mockup.status(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

