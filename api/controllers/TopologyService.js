'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericListRequest)
**/
exports.topologyControllerListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologyControllerListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologyControllerListPOST', args, res)) {
        var mockup = require('../models/ControllerDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.topologyDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologyDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologyDeletePOST', args, res)) {
        var mockup = require('../models/TopologyDTO');
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
* request (GenericRequest)
**/
exports.topologyEnableDiscoveryPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologyEnableDiscoveryPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologyEnableDiscoveryPOST', args, res)) {
        var mockup = require('../models/BaseDTO');
        var response = mockup.enableDiscovery(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (TopologyRequest)
**/
exports.topologyGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologyGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologyGetPOST', args, res)) {
        var mockup = require('../models/TopologyDTO');
        var response = mockup.topologyGet(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.topologyLinkDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologyLinkDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologyLinkDeletePOST', args, res)) {
        var mockup = require('../models/LinkDTO');
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
* request (LinkRequest)
**/
exports.topologyLinkGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologyLinkGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologyLinkGetPOST', args, res)) {
        var mockup = require('../models/LinkDTO');
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
exports.topologyLinkListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologyLinkListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologyLinkListPOST', args, res)) {
        var mockup = require('../models/LinkDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (LinkRequest)
**/
exports.topologyLinkSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologyLinkSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologyLinkSavePOST', args, res)) {
        var mockup = require('../models/LinkDTO');
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
exports.topologyLinkSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologyLinkSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologyLinkSearchPOST', args, res)) {
        var mockup = require('../models/LinkDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (TopologyListRequest)
**/
exports.topologyListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologyListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologyListPOST', args, res)) {
        var mockup = require('../models/TopologyInfoDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericListRequest)
**/
exports.topologyLiteControllerListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologyLiteControllerListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologyLiteControllerListPOST', args, res)) {
        var mockup = require('../models/LiteTopologyDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.topologySwitchDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologySwitchDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologySwitchDeletePOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
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
exports.topologySwitchGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologySwitchGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologySwitchGetPOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
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
exports.topologySwitchListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologySwitchListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologySwitchListPOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (SwitchRequest)
**/
exports.topologySwitchSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologySwitchSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologySwitchSavePOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
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
exports.topologySwitchSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "topologySwitchSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Topology.topologySwitchSearchPOST', args, res)) {
        var mockup = require('../models/SwitchDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

