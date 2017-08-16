'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.alarmDefinitionGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmDefinitionGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmDefinitionGetPOST', args, res)) {
        var mockup = require('../models/AlarmDTO');
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
exports.alarmDefinitionListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmDefinitionListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmDefinitionListPOST', args, res)) {
        var mockup = require('../models/AlarmDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (AlarmRequest)
**/
exports.alarmDefinitionUpdatePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmDefinitionUpdatePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmDefinitionUpdatePOST', args, res)) {
        var mockup = require('../models/AlarmDTO');
        var response = mockup.update(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (AlarmRequest)
**/
exports.alarmEditPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmEditPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmEditPOST', args, res)) {
        var mockup = require('../models/AlarmDTO');
        var response = mockup.edit(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.alarmGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmGetPOST', args, res)) {
        var mockup = require('../models/AlarmDTO');
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
exports.alarmListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmListPOST', args, res)) {
        var mockup = require('../models/AlarmDTO');
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
exports.alarmLogGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmLogGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmLogGetPOST', args, res)) {
        var mockup = require('../models/AlarmDTO');
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
exports.alarmLogListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmLogListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmLogListPOST', args, res)) {
        var mockup = require('../models/AlarmDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericSearchRequest)
**/
exports.alarmLogSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmLogSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmLogSearchPOST', args, res)) {
        var mockup = require('../models/AlarmDTO');
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
exports.alarmNotificationDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmNotificationDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmNotificationDeletePOST', args, res)) {
        var mockup = require('../models/AlarmNotificationDTO');
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
exports.alarmNotificationGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmNotificationGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmNotificationGetPOST', args, res)) {
        var mockup = require('../models/AlarmNotificationDTO');
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
exports.alarmNotificationListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmNotificationListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmNotificationListPOST', args, res)) {
        var mockup = require('../models/AlarmNotificationDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (AlarmNotificationRequest)
**/
exports.alarmNotificationSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmNotificationSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmNotificationSavePOST', args, res)) {
        var mockup = require('../models/AlarmNotificationDTO');
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
exports.alarmSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "alarmSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Alarm.alarmSearchPOST', args, res)) {
        var mockup = require('../models/AlarmDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

