'use strict';

//Model Definition File for FlowStatsDTO.js

//var BaseDTO = require('./BaseDTO');
//var FlowStats = require('./FlowStats');

'use strict';
/**
* Kullanıcı akışlarına ait istatistik veri transfer modeli.
*/
exports.FlowStatsDTO =  {
    type:'class',
    name:'FlowStatsDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        srcIP : { name: 'srcIP', type: 'String', isRequired: true }, 
        dstIP : { name: 'dstIP', type: 'String', isRequired: true }, 
        protocol : { name: 'protocol', type: 'String', isRequired: true }, 
        srcPort : { name: 'srcPort', type: 'Integer', isRequired: true }, 
        dstPort : { name: 'dstPort', type: 'Integer', isRequired: true }, 
        service : { name: 'service', type: 'String', isRequired: true }, 
        device : { name: 'device', type: 'String', isRequired: true }, 
        port : { name: 'port', type: 'Integer', isRequired: true }, 
        upStats : { name: 'upStats', type: 'Array', subType: 'FlowStats', isRequired: true }, 
        downStats : { name: 'downStats', type: 'Array', subType: 'FlowStats', isRequired: true }
    }
}


//Mockup System for FlowStatsDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowStatsDTO';
var dto_name = 'FlowStatsDTO';

function FlowStatsDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowStatsDTOData();
    }
}

function genFlowStatsDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowStatsDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowStatsDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowStatsDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowStatsDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowStatsDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowStatsDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowStatsDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowStatsDTODataInit;
exports.genData = genFlowStatsDTOData;
exports.getData = getFlowStatsDTOData;
exports.findData = findFlowStatsDTOData;
exports.getListData = getFlowStatsDTOListData;
exports.deleteData = deleteFlowStatsDTOData;
exports.saveData = saveFlowStatsDTOData;
exports.saveListData = saveFlowStatsDTOListData;
exports.getAllData = getAllFlowStatsDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowStatsDTODataInit();
}

var overrideModule = '../overrides/FlowStatsDTO';
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



