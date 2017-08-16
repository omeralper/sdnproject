'use strict';

//Model Definition File for ServiceActionDTO.js

//var BW_UNIT = require('./BW_UNIT');
//var BaseDTO = require('./BaseDTO');
//var ChangeHeadersInfo = require('./ChangeHeadersInfo');
//var FLOWBALANCECONSTRAINTTYPE = require('./FLOWBALANCECONSTRAINTTYPE');
//var LINK_TYPE = require('./LINK_TYPE');
//var NTOP_ROUTE = require('./NTOP_ROUTE');
//var RESERVED_PATH = require('./RESERVED_PATH');
//var RoutingServicesInfo = require('./RoutingServicesInfo');
//var ServicePolicyClassDTO = require('./ServicePolicyClassDTO');
//var SfcTypeDTO = require('./SfcTypeDTO');

'use strict';
/**
* Hizmet aksiyonu bilgisinin bulunduğu veri yapısı.
*/
exports.ServiceActionDTO =  {
    type:'class',
    name:'ServiceActionDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        policyName : { name: 'policyName', type: 'String' }, 
        priority : { name: 'priority', type: 'Integer' }, 
        includedDevices : { name: 'includedDevices', type: 'Array', subType: 'string' }, 
        excludedDevices : { name: 'excludedDevices', type: 'Array', subType: 'string' }, 
        linkType : { name: 'linkType', type: 'LINK_TYPE' }, 
        securityLevel : { name: 'securityLevel', type: 'Integer' }, 
        servicePolicyClass : { name: 'servicePolicyClass', type: 'ServicePolicyClassDTO' }, 
        maxBandwidth : { name: 'maxBandwidth', type: 'Integer' }, 
        maxBandwidthUnit : { name: 'maxBandwidthUnit', type: 'BW_UNIT' }, 
        changeHeaders : { name: 'changeHeaders', type: 'ChangeHeadersInfo' }, 
        reservedPath : { name: 'reservedPath', type: 'RESERVED_PATH' }, 
        reservedPathPriority : { name: 'reservedPathPriority', type: 'Integer' }, 
        ntopRoute : { name: 'ntopRoute', type: 'NTOP_ROUTE' }, 
        routingServices : { name: 'routingServices', type: 'RoutingServicesInfo' }, 
        mvtnId : { name: 'mvtnId', type: 'Integer' }, 
        mvtnName : { name: 'mvtnName', type: 'String' }, 
        energyConsumption : { name: 'energyConsumption', type: 'Integer' }, 
        useLowFlowSwitch : { name: 'useLowFlowSwitch', type: 'Boolean' }, 
        useMinHOP : { name: 'useMinHOP', type: 'Boolean' }, 
        flowBalanceConstraintTypeList : { name: 'flowBalanceConstraintTypeList', type: 'Array', subType: 'FLOWBALANCECONSTRAINTTYPE' }, 
        sfcType : { name: 'sfcType', type: 'SfcTypeDTO' }, 
        useControlChannel : { name: 'useControlChannel', type: 'Boolean' }
    }
}


//Mockup System for ServiceActionDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDServiceActionDTO';
var dto_name = 'ServiceActionDTO';

function ServiceActionDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genServiceActionDTOData();
    }
}

function genServiceActionDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getServiceActionDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getServiceActionDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findServiceActionDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteServiceActionDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveServiceActionDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveServiceActionDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllServiceActionDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ServiceActionDTODataInit;
exports.genData = genServiceActionDTOData;
exports.getData = getServiceActionDTOData;
exports.findData = findServiceActionDTOData;
exports.getListData = getServiceActionDTOListData;
exports.deleteData = deleteServiceActionDTOData;
exports.saveData = saveServiceActionDTOData;
exports.saveListData = saveServiceActionDTOListData;
exports.getAllData = getAllServiceActionDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ServiceActionDTODataInit();
}

var overrideModule = '../overrides/ServiceActionDTO';
try {
    var override = require(overrideModule);

    if (override && override.init) {
        console.info('DTO Override found :'+overrideModule);
        mockup.initDatabase(data_key,override.process_options);
        override.init(exports);
    } else {
        autoInit();
    }

} catch (e) {
    if (e.code == 'MODULE_NOT_FOUND') {
        console.warn('DTO Override NOT found :'+overrideModule);
        autoInit();
    } else {
        throw e;
    }
}



