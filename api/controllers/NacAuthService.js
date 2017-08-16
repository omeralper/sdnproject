'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.getsessionPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "getsessionPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacAuth.getsessionPOST', args, res)) {
        var mockup = require('../models/NacSessionDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericRequest)
**/
exports.getsessioncountPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "getsessioncountPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacAuth.getsessioncountPOST', args, res)) {
        var mockup = require('../models/NacSessionCountDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NacLoginRequest)
**/
exports.loginPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "loginPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacAuth.loginPOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
        var response = mockup.login(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.logoutPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "logoutPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacAuth.logoutPOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
        var response = mockup.logout(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NacUsernameRequest)
**/
exports.lostpwdPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "lostpwdPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NacAuth.lostpwdPOST', args, res)) {
        var mockup = require('../models/NacUserDTO');
        var response = mockup.lostpwd(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

