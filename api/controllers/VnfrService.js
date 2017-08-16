'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.sfcVnfrDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sfcVnfrDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Vnfr.sfcVnfrDeletePOST', args, res)) {
        var mockup = require('../models/VnfrDTO');
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
exports.sfcVnfrGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sfcVnfrGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Vnfr.sfcVnfrGetPOST', args, res)) {
        var mockup = require('../models/VnfrDTO');
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
exports.sfcVnfrListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sfcVnfrListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Vnfr.sfcVnfrListPOST', args, res)) {
        var mockup = require('../models/VnfrDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VnfrRequest)
**/
exports.sfcVnfrSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sfcVnfrSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Vnfr.sfcVnfrSavePOST', args, res)) {
        var mockup = require('../models/VnfrDTO');
        var data = mockup.saveData(val.data);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

