'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.dhcpWebIpExcludedDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebIpExcludedDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebIpExcludedDeletePOST', args, res)) {
        var mockup = require('../models/DhcpIpExcludedDTO');
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
* request (DhcpIpExcludedRequest)
**/
exports.dhcpWebIpExcludedSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebIpExcludedSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebIpExcludedSavePOST', args, res)) {
        var mockup = require('../models/DhcpIpExcludedDTO');
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
exports.dhcpWebIpExcludedSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebIpExcludedSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebIpExcludedSearchPOST', args, res)) {
        var mockup = require('../models/DhcpIpExcludedDTO');
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
exports.dhcpWebIpPoolSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebIpPoolSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebIpPoolSearchPOST', args, res)) {
        var mockup = require('../models/DhcpIpPoolDTO');
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
exports.dhcpWebIpRangeDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebIpRangeDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebIpRangeDeletePOST', args, res)) {
        var mockup = require('../models/DhcpIpRangeDTO');
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
* request (DhcpIpRangeRequest)
**/
exports.dhcpWebIpRangeSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebIpRangeSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebIpRangeSavePOST', args, res)) {
        var mockup = require('../models/DhcpIpRangeDTO');
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
exports.dhcpWebIpRangeSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebIpRangeSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebIpRangeSearchPOST', args, res)) {
        var mockup = require('../models/DhcpIpRangeDTO');
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
exports.dhcpWebIpReservedDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebIpReservedDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebIpReservedDeletePOST', args, res)) {
        var mockup = require('../models/DhcpIpReservedDTO');
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
* request (DhcpIpReservedRequest)
**/
exports.dhcpWebIpReservedSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebIpReservedSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebIpReservedSavePOST', args, res)) {
        var mockup = require('../models/DhcpIpReservedDTO');
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
exports.dhcpWebIpReservedSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebIpReservedSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebIpReservedSearchPOST', args, res)) {
        var mockup = require('../models/DhcpIpReservedDTO');
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
exports.dhcpWebIpownerSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebIpownerSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebIpownerSearchPOST', args, res)) {
        var mockup = require('../models/DhcpIPOwnerDTO');
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
exports.dhcpWebOptionDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebOptionDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebOptionDeletePOST', args, res)) {
        var mockup = require('../models/DhcpOptionDTO');
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
exports.dhcpWebOptionKeyListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebOptionKeyListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebOptionKeyListPOST', args, res)) {
        var mockup = require('../models/DhcpOptionKeyDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (DhcpOptionRequest)
**/
exports.dhcpWebOptionSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebOptionSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebOptionSavePOST', args, res)) {
        var mockup = require('../models/DhcpOptionDTO');
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
exports.dhcpWebOptionSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebOptionSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebOptionSearchPOST', args, res)) {
        var mockup = require('../models/DhcpOptionDTO');
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
exports.dhcpWebScopeDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebScopeDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebScopeDeletePOST', args, res)) {
        var mockup = require('../models/DhcpScopeDTO');
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
exports.dhcpWebScopeGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebScopeGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebScopeGetPOST', args, res)) {
        var mockup = require('../models/DhcpScopeDTO');
        var response = mockup.dhcpScopeGet(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericListRequest)
**/
exports.dhcpWebScopeListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebScopeListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebScopeListPOST', args, res)) {
        var mockup = require('../models/DhcpScopeDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (DhcpScopeRequest)
**/
exports.dhcpWebScopeSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebScopeSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebScopeSavePOST', args, res)) {
        var mockup = require('../models/DhcpScopeDTO');
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
exports.dhcpWebScopeSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpWebScopeSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpWebScopeSearchPOST', args, res)) {
        var mockup = require('../models/DhcpScopeDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (DhcpIpPoolRequest)
**/
exports.dhcpcentralwanDhcpCentalWanWebIpPoolSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpcentralwanDhcpCentalWanWebIpPoolSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpcentralwanDhcpCentalWanWebIpPoolSavePOST', args, res)) {
        var mockup = require('../models/DhcpIpPoolDTO');
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
exports.dhcpcentralwanDhcpCentalWanWebIpPoolSearchPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "dhcpcentralwanDhcpCentalWanWebIpPoolSearchPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.Dhcp.dhcpcentralwanDhcpCentalWanWebIpPoolSearchPOST', args, res)) {
        var mockup = require('../models/DhcpIpPoolDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

