'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (MultipleWanDomainListRequest)
**/
exports.wanConfigurationWanDomainBulkSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanConfigurationWanDomainBulkSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WANDOMAIN.wanConfigurationWanDomainBulkSavePOST', args, res)) {
        var mockup = require('../models/MultipleWanDomainDTO');
        var response = mockup.bulkSave(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericRequest)
**/
exports.wanConfigurationWanDomainCurrentPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanConfigurationWanDomainCurrentPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WANDOMAIN.wanConfigurationWanDomainCurrentPOST', args, res)) {
        var mockup = require('../models/WanDomainDTO');
        var response = mockup.current(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.wanConfigurationWanDomainDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanConfigurationWanDomainDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WANDOMAIN.wanConfigurationWanDomainDeletePOST', args, res)) {
        var mockup = require('../models/WanDomainDTO');
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
exports.wanConfigurationWanDomainGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanConfigurationWanDomainGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WANDOMAIN.wanConfigurationWanDomainGetPOST', args, res)) {
        var mockup = require('../models/WanDomainDTO');
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
exports.wanConfigurationWanDomainListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanConfigurationWanDomainListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WANDOMAIN.wanConfigurationWanDomainListPOST', args, res)) {
        var mockup = require('../models/WanDomainDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (WanDomainRequest)
**/
exports.wanConfigurationWanDomainSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanConfigurationWanDomainSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WANDOMAIN.wanConfigurationWanDomainSavePOST', args, res)) {
        var mockup = require('../models/WanDomainDTO');
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
exports.wanConfigurationWanDomainSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanConfigurationWanDomainSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WANDOMAIN.wanConfigurationWanDomainSearchPOST', args, res)) {
        var mockup = require('../models/WanDomainDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

