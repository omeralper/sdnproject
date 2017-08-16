'use strict';

//Model Definition File for FlowDTO.js

//var AddressInfo = require('./AddressInfo');
//var BaseDTO = require('./BaseDTO');
//var FLOW_STATE = require('./FLOW_STATE');

'use strict';
/**
* Akış detaylarının bulunduğu veri transfer modeli.
*/
exports.FlowDTO =  {
    type:'class',
    name:'FlowDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        appId : { name: 'appId', type: 'Integer' }, 
        groupId : { name: 'groupId', type: 'Integer' }, 
        priority : { name: 'priority', type: 'Integer' }, 
        deviceId : { name: 'deviceId', type: 'String' }, 
        tableId : { name: 'tableId', type: 'Integer' }, 
        matchList : { name: 'matchList', type: 'Array', subType: 'string' }, 
        instructionList : { name: 'instructionList', type: 'Array', subType: 'string' }, 
        idleTimeout : { name: 'idleTimeout', type: 'Long' }, 
        hardTimeout : { name: 'hardTimeout', type: 'Long' }, 
        cookie : { name: 'cookie', type: 'Long' }, 
        state : { name: 'state', type: 'FLOW_STATE' }, 
        life : { name: 'life', type: 'Long' }, 
        packets : { name: 'packets', type: 'Long' }, 
        bytes : { name: 'bytes', type: 'Long' }, 
        lastSeen : { name: 'lastSeen', type: 'Long' }, 
        errType : { name: 'errType', type: 'Integer' }, 
        errCode : { name: 'errCode', type: 'Integer' }, 
        controllerName : { name: 'controllerName', type: 'String' }, 
        controllerAddress : { name: 'controllerAddress', type: 'AddressInfo' }, 
        controllerPort : { name: 'controllerPort', type: 'String' }
    }
}


//Mockup System for FlowDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowDTO';
var dto_name = 'FlowDTO';

function FlowDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowDTOData();
    }
}

function genFlowDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowDTODataInit;
exports.genData = genFlowDTOData;
exports.getData = getFlowDTOData;
exports.findData = findFlowDTOData;
exports.getListData = getFlowDTOListData;
exports.deleteData = deleteFlowDTOData;
exports.saveData = saveFlowDTOData;
exports.saveListData = saveFlowDTOListData;
exports.getAllData = getAllFlowDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowDTODataInit();
}

var overrideModule = '../overrides/FlowDTO';
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



