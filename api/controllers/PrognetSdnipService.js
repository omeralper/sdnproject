'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (SdnipRequest)
**/
exports.routerAsNumberGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "routerAsNumberGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetSdnip.routerAsNumberGetPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.routerDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "routerDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetSdnip.routerDeletePOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.routerGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "routerGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetSdnip.routerGetPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.routerNeighborDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "routerNeighborDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetSdnip.routerNeighborDeletePOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.routerNeighborGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "routerNeighborGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetSdnip.routerNeighborGetPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NeighborRelationSaveRequest)
**/
exports.routerNeighborSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "routerNeighborSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetSdnip.routerNeighborSavePOST', args, res)) {
        var mockup = require('../models/NeighborRelationDTO');
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
exports.routerNeighborSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "routerNeighborSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetSdnip.routerNeighborSearchPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.routerNeighborStatusListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "routerNeighborStatusListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetSdnip.routerNeighborStatusListPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericSearchRequest)
**/
exports.routerRouteSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "routerRouteSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetSdnip.routerRouteSearchPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (SdnipRouterSaveRequest)
**/
exports.routerSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "routerSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetSdnip.routerSavePOST', args, res)) {
        var mockup = require('../models/SdnipRouterDTO');
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
exports.routerSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "routerSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.PrognetSdnip.routerSearchPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

