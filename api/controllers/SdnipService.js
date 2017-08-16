'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (SdnipRequest)
**/
exports.sdnipRouterAsNumberGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterAsNumberGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterAsNumberGetPOST', args, res)) {
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
exports.sdnipRouterDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterDeletePOST', args, res)) {
        var mockup = require('../models/SdnipRouterDTO');
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
exports.sdnipRouterGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterGetPOST', args, res)) {
        var mockup = require('../models/SdnipRouterDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.sdnipRouterNeighborDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterNeighborDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterNeighborDeletePOST', args, res)) {
        var mockup = require('../models/NeighborRelationDTO');
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
exports.sdnipRouterNeighborGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterNeighborGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterNeighborGetPOST', args, res)) {
        var mockup = require('../models/NeighborRelationDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NeighborRelationSaveRequest)
**/
exports.sdnipRouterNeighborSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterNeighborSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterNeighborSavePOST', args, res)) {
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
exports.sdnipRouterNeighborSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterNeighborSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterNeighborSearchPOST', args, res)) {
        var mockup = require('../models/NeighborRelationDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.sdnipRouterNeighborStatusListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterNeighborStatusListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterNeighborStatusListPOST', args, res)) {
        var mockup = require('../models/NeighborRelationDTO');
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
exports.sdnipRouterRouteDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterRouteDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterRouteDeletePOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (SdnipRouteSaveRequest)
**/
exports.sdnipRouterRouteSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterRouteSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterRouteSavePOST', args, res)) {
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
exports.sdnipRouterRouteSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterRouteSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterRouteSearchPOST', args, res)) {
        var mockup = require('../models/SdnipRouteDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (SdnipRouterSaveRequest)
**/
exports.sdnipRouterSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterSavePOST', args, res)) {
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
exports.sdnipRouterSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "sdnipRouterSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Sdnip.sdnipRouterSearchPOST', args, res)) {
        var mockup = require('../models/SdnipRouterDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

