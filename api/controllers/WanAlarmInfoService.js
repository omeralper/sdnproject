'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericListRequest)
**/
exports.wanAlarmListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "wanAlarmListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.WanAlarmInfo.wanAlarmListPOST', args, res)) {
        var mockup = require('../models/WanAlarmInfoDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

