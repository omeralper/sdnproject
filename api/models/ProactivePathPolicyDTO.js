'use strict';

//Model Definition File for ProactivePathPolicyDTO.js

//var BaseDTO = require('./BaseDTO');
//var PPPSubPathDTO = require('./PPPSubPathDTO');
//var PPP_STATUS = require('./PPP_STATUS');
//var ServiceActionDTO = require('./ServiceActionDTO');
//var SwitchDTO = require('./SwitchDTO');

'use strict';
/**
* Proaktif patika politikasını tanımlayan veri modeli.
*/
exports.ProactivePathPolicyDTO =  {
    type:'class',
    name:'ProactivePathPolicyDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        intentId : { name: 'intentId', type: 'String' }, 
        serviceAction : { name: 'serviceAction', type: 'ServiceActionDTO' }, 
        priority : { name: 'priority', type: 'Integer' }, 
        name : { name: 'name', type: 'String' }, 
        type : { name: 'type', type: 'Integer' }, 
        status : { name: 'status', type: 'PPP_STATUS' }, 
        startTime : { name: 'startTime', type: 'Date' }, 
        stopTime : { name: 'stopTime', type: 'Date' }, 
        fromId : { name: 'fromId', type: 'String' }, 
        toId : { name: 'toId', type: 'String' }, 
        mvtnId : { name: 'mvtnId', type: 'Integer' }, 
        mvtnName : { name: 'mvtnName', type: 'String' }, 
        subPathList : { name: 'subPathList', type: 'Array', subType: 'PPPSubPathDTO' }, 
        selectedSubPathId : { name: 'selectedSubPathId', type: 'String' }, 
        mustVisitDeviceList : { name: 'mustVisitDeviceList', type: 'Array', subType: 'SwitchDTO' }
    }
}


//Mockup System for ProactivePathPolicyDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDProactivePathPolicyDTO';
var dto_name = 'ProactivePathPolicyDTO';

function ProactivePathPolicyDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genProactivePathPolicyDTOData();
    }
}

function genProactivePathPolicyDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getProactivePathPolicyDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getProactivePathPolicyDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findProactivePathPolicyDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteProactivePathPolicyDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveProactivePathPolicyDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveProactivePathPolicyDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllProactivePathPolicyDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ProactivePathPolicyDTODataInit;
exports.genData = genProactivePathPolicyDTOData;
exports.getData = getProactivePathPolicyDTOData;
exports.findData = findProactivePathPolicyDTOData;
exports.getListData = getProactivePathPolicyDTOListData;
exports.deleteData = deleteProactivePathPolicyDTOData;
exports.saveData = saveProactivePathPolicyDTOData;
exports.saveListData = saveProactivePathPolicyDTOListData;
exports.getAllData = getAllProactivePathPolicyDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ProactivePathPolicyDTODataInit();
}

var overrideModule = '../overrides/ProactivePathPolicyDTO';
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



