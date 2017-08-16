'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (LoginRequest)
**/
exports.aaaLoginPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaLoginPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAA.aaaLoginPOST', args, res)) {
        var mockup = require('../models/UserDTO');
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
exports.aaaLogoutPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaLogoutPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAA.aaaLogoutPOST', args, res)) {
        var mockup = require('../models/UserDTO');
        var response = mockup.logout(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (UsernameRequest)
**/
exports.aaaLostpwdPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaLostpwdPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAA.aaaLostpwdPOST', args, res)) {
        var mockup = require('../models/UserDTO');
        var response = mockup.lostpwd(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ApiCoreRequest)
**/
exports.aaaPingPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaPingPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAA.aaaPingPOST', args, res)) {
        var mockup = require('../models/UserDTO');
        var response = mockup.ping(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

