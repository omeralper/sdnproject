'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.aaaPermGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaPermGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAAPermissions.aaaPermGetPOST', args, res)) {
        var mockup = require('../models/PermDTO');
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
exports.aaaPermListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaPermListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAAPermissions.aaaPermListPOST', args, res)) {
        var mockup = require('../models/PermDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericSearchRequest)
**/
exports.aaaPermSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "aaaPermSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.AAAPermissions.aaaPermSearchPOST', args, res)) {
        var mockup = require('../models/PermDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

