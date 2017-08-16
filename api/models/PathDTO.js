'use strict';

//Model Definition File for PathDTO.js

//var BaseDTO = require('./BaseDTO');
//var LinkDTO = require('./LinkDTO');
//var PATH_STATE = require('./PATH_STATE');
//var PATH_TYPE = require('./PATH_TYPE');
//var TOPOLOGY_TYPE = require('./TOPOLOGY_TYPE');
//var TRANSPORT_PROTOCOL = require('./TRANSPORT_PROTOCOL');

'use strict';
/**
* Patika detaylarının bulunduğu veri transfer modeli.
*/
exports.PathDTO =  {
    type:'class',
    name:'PathDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        appId : { name: 'appId', type: 'String' }, 
        priority : { name: 'priority', type: 'Integer' }, 
        srcDeviceId : { name: 'srcDeviceId', type: 'String' }, 
        dstDeviceId : { name: 'dstDeviceId', type: 'String' }, 
        srcHostId : { name: 'srcHostId', type: 'String' }, 
        dstHostId : { name: 'dstHostId', type: 'String' }, 
        protocol : { name: 'protocol', type: 'TRANSPORT_PROTOCOL' }, 
        srcPort : { name: 'srcPort', type: 'Integer' }, 
        dstPort : { name: 'dstPort', type: 'Integer' }, 
        srcPortNumber : { name: 'srcPortNumber', type: 'Long' }, 
        dstPortNumber : { name: 'dstPortNumber', type: 'Long' }, 
        links : { name: 'links', type: 'Array', subType: 'LinkDTO' }, 
        intentKey : { name: 'intentKey', type: 'String' }, 
        type : { name: 'type', type: 'PATH_TYPE' }, 
        topologyType : { name: 'topologyType', type: 'TOPOLOGY_TYPE' }, 
        topologyId : { name: 'topologyId', type: 'String' }, 
        bandwidthConstraint : { name: 'bandwidthConstraint', type: 'Long' }, 
        maxBandwidthConstraint : { name: 'maxBandwidthConstraint', type: 'Long' }, 
        state : { name: 'state', type: 'PATH_STATE' }, 
        securityLevel : { name: 'securityLevel', type: 'Integer' }, 
        validatePath : { name: 'validatePath', type: 'Boolean' }, 
        validatePathPacketInterval : { name: 'validatePathPacketInterval', type: 'Long' }, 
        validatePathPacketNo : { name: 'validatePathPacketNo', type: 'Long' }, 
        validatePathAvgDelay : { name: 'validatePathAvgDelay', type: 'Long' }, 
        routeHopFrequency : { name: 'routeHopFrequency', type: 'Long' }
    }
}


//Mockup System for PathDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPathDTO';
var dto_name = 'PathDTO';

function PathDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPathDTOData();
    }
}

function genPathDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPathDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPathDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findPathDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePathDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function savePathDTOData(data) {
    return mockup.saveData(data_key, data);
}

function savePathDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPathDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = PathDTODataInit;
exports.genData = genPathDTOData;
exports.getData = getPathDTOData;
exports.findData = findPathDTOData;
exports.getListData = getPathDTOListData;
exports.deleteData = deletePathDTOData;
exports.saveData = savePathDTOData;
exports.saveListData = savePathDTOListData;
exports.getAllData = getAllPathDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    PathDTODataInit();
}

var overrideModule = '../overrides/PathDTO';
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



