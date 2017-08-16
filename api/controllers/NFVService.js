'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (GenericDeleteRequest)
**/
exports.nsdDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "nsdDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.nsdDeletePOST', args, res)) {
        var mockup = require('../models/NetServiceDescDTO');
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
exports.nsdGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "nsdGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.nsdGetPOST', args, res)) {
        var mockup = require('../models/NetServiceDescDTO');
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
exports.nsdListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "nsdListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.nsdListPOST', args, res)) {
        var mockup = require('../models/NetServiceDescDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NetServiceDescRequest)
**/
exports.nsdSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "nsdSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.nsdSavePOST', args, res)) {
        var mockup = require('../models/NetServiceDescDTO');
        var data = mockup.saveData(val.data);
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
exports.nsrDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "nsrDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.nsrDeletePOST', args, res)) {
        var mockup = require('../models/NetServiceRecordDTO');
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
exports.nsrGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "nsrGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.nsrGetPOST', args, res)) {
        var mockup = require('../models/NetServiceRecordDTO');
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
exports.nsrListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "nsrListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.nsrListPOST', args, res)) {
        var mockup = require('../models/NetServiceRecordDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (NetServiceRecordLaunchRequest)
**/
exports.nsrSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "nsrSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.nsrSavePOST', args, res)) {
        var mockup = require('../models/NetServiceRecordDTO');
        var data = mockup.saveData(val.data);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ComputeHostRequest)
**/
exports.vimComputeHostGetByIpPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vimComputeHostGetByIpPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vimComputeHostGetByIpPOST', args, res)) {
        var mockup = require('../models/ComputeHostGenericDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ComputeHostStatisticRequest)
**/
exports.vimComputeHostGetStatisticPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vimComputeHostGetStatisticPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vimComputeHostGetStatisticPOST', args, res)) {
        var mockup = require('../models/ComputeStatisticsDTO');
        var data = mockup.getData(val.id);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ComputeHostListRequest)
**/
exports.vimComputeHostListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vimComputeHostListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vimComputeHostListPOST', args, res)) {
        var mockup = require('../models/ComputeHostListDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (ComputeHostStatisticListRequest)
**/
exports.vimGetAllComputeHostStatisticPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vimGetAllComputeHostStatisticPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vimGetAllComputeHostStatisticPOST', args, res)) {
        var mockup = require('../models/ComputeHostStatisticListDTO');
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
exports.vimListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vimListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vimListPOST', args, res)) {
        var mockup = require('../models/VimInfoDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VirtualNetFunctionInstanceActionRequest)
**/
exports.vimVmRestartPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vimVmRestartPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vimVmRestartPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VirtualNetFunctionInstanceActionRequest)
**/
exports.vimVmStartPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vimVmStartPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vimVmStartPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VirtualNetFunctionInstanceActionRequest)
**/
exports.vimVmStopPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vimVmStopPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vimVmStopPOST', args, res)) {
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
exports.vimZoneGetByIpPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vimZoneGetByIpPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vimZoneGetByIpPOST', args, res)) {
        var mockup = require('../models/ZoneObjectDTO');
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
exports.vimZoneGetByNamePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vimZoneGetByNamePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vimZoneGetByNamePOST', args, res)) {
        var mockup = require('../models/ZoneObjectDTO');
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
exports.vimZoneListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vimZoneListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vimZoneListPOST', args, res)) {
        var mockup = require('../models/ZoneObjectDTO');
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
exports.vnfDeletePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfDeletePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfDeletePOST', args, res)) {
        var mockup = require('../models/VirtualNetFunctionDTO');
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
* request (VnfActionRequest)
**/
exports.vnfDeregisterVnfFailOverPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfDeregisterVnfFailOverPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfDeregisterVnfFailOverPOST', args, res)) {
        var mockup = require('../models/VirtualNetFunctionDTO');
        var response = mockup.deregisterVnfFailOver(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (GenericIdRequest)
**/
exports.vnfGetPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfGetPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfGetPOST', args, res)) {
        var mockup = require('../models/VirtualNetFunctionDTO');
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
exports.vnfListPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfListPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfListPOST', args, res)) {
        var mockup = require('../models/VirtualNetFunctionDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VnfActionRequest)
**/
exports.vnfRegisterVnfFailOverPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfRegisterVnfFailOverPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfRegisterVnfFailOverPOST', args, res)) {
        var mockup = require('../models/VirtualNetFunctionDTO');
        var response = mockup.registerVnfFailOver(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VnfActionRequest)
**/
exports.vnfRemoveVnfPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfRemoveVnfPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfRemoveVnfPOST', args, res)) {
        var mockup = require('../models/VirtualNetFunctionDTO');
        var response = mockup.removeVnf(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VirtualNetFunctionRequest)
**/
exports.vnfSavePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfSavePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfSavePOST', args, res)) {
        var mockup = require('../models/VirtualNetFunctionDTO');
        var data = mockup.saveData(val.data);
        var response = mockupHelper.genResponse(data);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VirtualNetFunctionInstanceListRequest)
**/
exports.vnfSearchVnfInstanceInfoPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfSearchVnfInstanceInfoPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfSearchVnfInstanceInfoPOST', args, res)) {
        var mockup = require('../models/VirtualNetFunctionInstanceListDTO');
        var response = mockup.getListData(val.options);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VnfActionRequest)
**/
exports.vnfStartVnfPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfStartVnfPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfStartVnfPOST', args, res)) {
        var mockup = require('../models/VirtualNetFunctionDTO');
        var response = mockup.startVnf(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VirtualNetFunctionRequest)
**/
exports.vnfUpdatePOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfUpdatePOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfUpdatePOST', args, res)) {
        var mockup = require('../models/VirtualNetFunctionDTO');
        var response = mockup.update(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VnfciActionResponse)
**/
exports.vnfVnfciStartByIpPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfVnfciStartByIpPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfVnfciStartByIpPOST', args, res)) {
        var mockup = require('../models/VnfciActionRequest');
        var response = mockup.startByIp(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VnfciActionResponse)
**/
exports.vnfVnfciStartPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfVnfciStartPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfVnfciStartPOST', args, res)) {
        var mockup = require('../models/VnfciActionRequest');
        var response = mockup.start(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VnfciActionResponse)
**/
exports.vnfVnfciStopByIpPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfVnfciStopByIpPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfVnfciStopByIpPOST', args, res)) {
        var mockup = require('../models/VnfciActionRequest');
        var response = mockup.stopByIp(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (VnfciActionResponse)
**/
exports.vnfVnfciStopPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "vnfVnfciStopPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.NFV.vnfVnfciStopPOST', args, res)) {
        var mockup = require('../models/VnfciActionRequest');
        var response = mockup.stop(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

