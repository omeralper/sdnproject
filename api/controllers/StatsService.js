'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericIdListRequest)
**/
exports.hostStatsHostPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "hostStatsHostPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Stats.hostStatsHostPOST', args, res)) {
        var mockup = require('../models/HostStatsDTO');
        var response = mockup.host(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdListRequest)
**/
exports.linkStatsLinkPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "linkStatsLinkPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Stats.linkStatsLinkPOST', args, res)) {
        var mockup = require('../models/LinkStatsDTO');
        var response = mockup.link(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdListRequest)
**/
exports.portStatsPortPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "portStatsPortPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Stats.portStatsPortPOST', args, res)) {
        var mockup = require('../models/PortStatsDTO');
        var response = mockup.port(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdListRequest)
**/
exports.portStatsSwitchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "portStatsSwitchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Stats.portStatsSwitchPOST', args, res)) {
        var mockup = require('../models/SwitchStatsDTO');
        var response = mockup.switch(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

