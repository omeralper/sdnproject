'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (WanPortInfoDeleteRequest)
**/
exports.wanConfigurationWanPortInfoDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanConfigurationWanPortInfoDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WanPortInfo.wanConfigurationWanPortInfoDeletePOST', args, res)) {
        var mockup = require('../models/WanPortInfoDTO');
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
exports.wanConfigurationWanPortInfoGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanConfigurationWanPortInfoGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WanPortInfo.wanConfigurationWanPortInfoGetPOST', args, res)) {
        var mockup = require('../models/WanPortInfoDTO');
        var response = mockup.WanPortInfoGet(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (WanPortInfoRequest)
**/
exports.wanConfigurationWanPortInfoSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanConfigurationWanPortInfoSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WanPortInfo.wanConfigurationWanPortInfoSavePOST', args, res)) {
        var mockup = require('../models/WanPortInfoDTO');
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
exports.wanConfigurationWanPortInfoSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanConfigurationWanPortInfoSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WanPortInfo.wanConfigurationWanPortInfoSearchPOST', args, res)) {
        var mockup = require('../models/WanPortInfoDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

