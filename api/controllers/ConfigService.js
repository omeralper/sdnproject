'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.configConfigDefinitionDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "configConfigDefinitionDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Config.configConfigDefinitionDeletePOST', args, res)) {
        var mockup = require('../models/ConfigDefinitionDTO');
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
exports.configConfigDefinitionGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "configConfigDefinitionGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Config.configConfigDefinitionGetPOST', args, res)) {
        var mockup = require('../models/ConfigDefinitionDTO');
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
exports.configConfigDefinitionListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "configConfigDefinitionListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Config.configConfigDefinitionListPOST', args, res)) {
        var mockup = require('../models/ConfigDefinitionDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ConfigDefinitionRequest)
**/
exports.configConfigDefinitionSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "configConfigDefinitionSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Config.configConfigDefinitionSavePOST', args, res)) {
        var mockup = require('../models/ConfigDefinitionDTO');
        var data = mockup.saveData(val.data);
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
exports.configModuleNodeConfigDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "configModuleNodeConfigDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Config.configModuleNodeConfigDeletePOST', args, res)) {
        var mockup = require('../models/ModuleNodeConfigDTO');
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
exports.configModuleNodeConfigGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "configModuleNodeConfigGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Config.configModuleNodeConfigGetPOST', args, res)) {
        var mockup = require('../models/ModuleNodeConfigDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ModuleNodeConfigListRequest)
**/
exports.configModuleNodeConfigListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "configModuleNodeConfigListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Config.configModuleNodeConfigListPOST', args, res)) {
        var mockup = require('../models/ModuleNodeConfigDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ModuleNodeConfigRequest)
**/
exports.configModuleNodeConfigSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "configModuleNodeConfigSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Config.configModuleNodeConfigSavePOST', args, res)) {
        var mockup = require('../models/ModuleNodeConfigDTO');
        var data = mockup.saveData(val.data);
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
exports.configModuleNodesListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "configModuleNodesListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Config.configModuleNodesListPOST', args, res)) {
        var mockup = require('../models/ModuleNodesDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

