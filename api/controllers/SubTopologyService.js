'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (TopologyRequest)
**/
exports.mvtnRequestGetSubPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "mvtnRequestGetSubPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SubTopology.mvtnRequestGetSubPOST', args, res)) {
        var mockup = require('../models/MvtnSubTopologyDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (TopologyRequest)
**/
exports.topologyGetSubPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologyGetSubPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SubTopology.topologyGetSubPOST', args, res)) {
        var mockup = require('../models/SubTopologyDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (TopologyRequest)
**/
exports.virtualGetSubPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualGetSubPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SubTopology.virtualGetSubPOST', args, res)) {
        var mockup = require('../models/MvtnSubTopologyDTO');
        var data = mockup.getData(val.id);
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
exports.virtualSaveSubPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "virtualSaveSubPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.SubTopology.virtualSaveSubPOST', args, res)) {
        var mockup = require('../models/MvtnSubTopologyDTO');
        var data = mockup.saveData(val.data);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

