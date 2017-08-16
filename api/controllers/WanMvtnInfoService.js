'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (WanMvtnInfoRequest)
**/
exports.wanMvtnCreatePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanMvtnCreatePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WanMvtnInfo.wanMvtnCreatePOST', args, res)) {
        var mockup = require('../models/WanMvtnInfoDTO');
        var response = mockup.create(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.wanMvtnDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanMvtnDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WanMvtnInfo.wanMvtnDeletePOST', args, res)) {
        var mockup = require('../models/WanMvtnInfoDTO');
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
* request (GenericListRequest)
**/
exports.wanMvtnListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanMvtnListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WanMvtnInfo.wanMvtnListPOST', args, res)) {
        var mockup = require('../models/WanMvtnInfoDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

