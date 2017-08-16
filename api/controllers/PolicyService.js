'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.endUserAppDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "endUserAppDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.endUserAppDeletePOST', args, res)) {
        var mockup = require('../models/EndUserApplicationDTO');
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
exports.endUserAppGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "endUserAppGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.endUserAppGetPOST', args, res)) {
        var mockup = require('../models/EndUserApplicationDTO');
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
exports.endUserAppListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "endUserAppListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.endUserAppListPOST', args, res)) {
        var mockup = require('../models/EndUserApplicationDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (EndUserApplicationRequest)
**/
exports.endUserAppSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "endUserAppSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.endUserAppSavePOST', args, res)) {
        var mockup = require('../models/EndUserApplicationDTO');
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
exports.endUserAppSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "endUserAppSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.endUserAppSearchPOST', args, res)) {
        var mockup = require('../models/EndUserApplicationDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ApiCoreRequest)
**/
exports.overlayPolicyCountPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "overlayPolicyCountPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.overlayPolicyCountPOST', args, res)) {
        var mockup = require('../models/AccessPolicyDTO');
        var response = mockup.count(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.overlayPolicyDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "overlayPolicyDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.overlayPolicyDeletePOST', args, res)) {
        var mockup = require('../models/AccessPolicyDTO');
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
exports.overlayPolicyGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "overlayPolicyGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.overlayPolicyGetPOST', args, res)) {
        var mockup = require('../models/AccessPolicyDTO');
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
exports.overlayPolicyListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "overlayPolicyListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.overlayPolicyListPOST', args, res)) {
        var mockup = require('../models/AccessPolicyDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (AccessPolicyRequest)
**/
exports.overlayPolicySavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "overlayPolicySavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.overlayPolicySavePOST', args, res)) {
        var mockup = require('../models/AccessPolicyDTO');
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
exports.overlayPolicySearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "overlayPolicySearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.overlayPolicySearchPOST', args, res)) {
        var mockup = require('../models/AccessPolicyDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ApiCoreRequest)
**/
exports.policyAccessProfileCountPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyAccessProfileCountPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyAccessProfileCountPOST', args, res)) {
        var mockup = require('../models/AccessProfileDTO');
        var response = mockup.count(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.policyAccessProfileDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyAccessProfileDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyAccessProfileDeletePOST', args, res)) {
        var mockup = require('../models/AccessProfileDTO');
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
exports.policyAccessProfileGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyAccessProfileGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyAccessProfileGetPOST', args, res)) {
        var mockup = require('../models/AccessProfileDTO');
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
exports.policyAccessProfileListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyAccessProfileListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyAccessProfileListPOST', args, res)) {
        var mockup = require('../models/AccessProfileDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (AccessProfileRequest)
**/
exports.policyAccessProfileSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyAccessProfileSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyAccessProfileSavePOST', args, res)) {
        var mockup = require('../models/AccessProfileDTO');
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
exports.policyAccessProfileSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyAccessProfileSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyAccessProfileSearchPOST', args, res)) {
        var mockup = require('../models/AccessProfileDTO');
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
exports.policyServiceActionDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyServiceActionDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyServiceActionDeletePOST', args, res)) {
        var mockup = require('../models/ServiceActionDTO');
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
exports.policyServiceActionGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyServiceActionGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyServiceActionGetPOST', args, res)) {
        var mockup = require('../models/ServiceActionDTO');
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
exports.policyServiceActionListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyServiceActionListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyServiceActionListPOST', args, res)) {
        var mockup = require('../models/ServiceActionDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ServiceActionRequest)
**/
exports.policyServiceActionSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyServiceActionSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyServiceActionSavePOST', args, res)) {
        var mockup = require('../models/ServiceActionDTO');
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
exports.policyServiceActionSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyServiceActionSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyServiceActionSearchPOST', args, res)) {
        var mockup = require('../models/ServiceActionDTO');
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
exports.policyServiceClassDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyServiceClassDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyServiceClassDeletePOST', args, res)) {
        var mockup = require('../models/ServicePolicyClassDTO');
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
exports.policyServiceClassGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyServiceClassGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyServiceClassGetPOST', args, res)) {
        var mockup = require('../models/ServicePolicyClassDTO');
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
exports.policyServiceClassListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyServiceClassListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyServiceClassListPOST', args, res)) {
        var mockup = require('../models/ServicePolicyClassDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ServicePolicyClassRequest)
**/
exports.policyServiceClassSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyServiceClassSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyServiceClassSavePOST', args, res)) {
        var mockup = require('../models/ServicePolicyClassDTO');
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
exports.policyServiceClassSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "policyServiceClassSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Policy.policyServiceClassSearchPOST', args, res)) {
        var mockup = require('../models/ServicePolicyClassDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

