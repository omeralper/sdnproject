'use strict';

//Model Definition File for ControllerNodeDTO.js

//var BaseDTO = require('./BaseDTO');
//var CONTROLLER_NODE_TYPE = require('./CONTROLLER_NODE_TYPE');
//var CONTROLLER_STATUS = require('./CONTROLLER_STATUS');

'use strict';
/**
* Kontrolcü düğüm veri yapısı.
*/
exports.ControllerNodeDTO =  {
    type:'class',
    name:'ControllerNodeDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        deviceList : { name: 'deviceList', type: 'Array', subType: 'string' }, 
        type : { name: 'type', type: 'CONTROLLER_NODE_TYPE' }, 
        status : { name: 'status', type: 'CONTROLLER_STATUS' }, 
        managementAddress : { name: 'managementAddress', type: 'String' }, 
        managementPort : { name: 'managementPort', type: 'String' }, 
        location : { name: 'location', type: 'String' }, 
        clusterId : { name: 'clusterId', type: 'String' }, 
        nmNodeId : { name: 'nmNodeId', type: 'String' }, 
        controllerNodeId : { name: 'controllerNodeId', type: 'String' }, 
        openflowVersions : { name: 'openflowVersions', type: 'String' }
    }
}


//Mockup System for ControllerNodeDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDControllerNodeDTO';
var dto_name = 'ControllerNodeDTO';

function ControllerNodeDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genControllerNodeDTOData();
    }
}

function genControllerNodeDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getControllerNodeDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getControllerNodeDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findControllerNodeDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteControllerNodeDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveControllerNodeDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveControllerNodeDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllControllerNodeDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ControllerNodeDTODataInit;
exports.genData = genControllerNodeDTOData;
exports.getData = getControllerNodeDTOData;
exports.findData = findControllerNodeDTOData;
exports.getListData = getControllerNodeDTOListData;
exports.deleteData = deleteControllerNodeDTOData;
exports.saveData = saveControllerNodeDTOData;
exports.saveListData = saveControllerNodeDTOListData;
exports.getAllData = getAllControllerNodeDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ControllerNodeDTODataInit();
}

var overrideModule = '../overrides/ControllerNodeDTO';
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



