'use strict';

//Model Definition File for MonitorInfoDTO.js

//var BaseDTO = require('./BaseDTO');
//var CounterProperties = require('./CounterProperties');
//var GaugeProperties = require('./GaugeProperties');
//var MONITOR_TYPE = require('./MONITOR_TYPE');
//var MonitorTagValue = require('./MonitorTagValue');

'use strict';
/**
* Göstergeleri ve alanlarını içeren veri yapısıdır.
*/
exports.MonitorInfoDTO =  {
    type:'class',
    name:'MonitorInfoDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        owner : { name: 'owner', type: 'String', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        node : { name: 'node', type: 'String', isRequired: true }, 
        distributed : { name: 'distributed', type: 'Boolean', isRequired: true }, 
        monitorType : { name: 'monitorType', type: 'MONITOR_TYPE', isRequired: true }, 
        goesToTSDB : { name: 'goesToTSDB', type: 'Boolean', isRequired: true }, 
        comesFromTSDB : { name: 'comesFromTSDB', type: 'Boolean', isRequired: true }, 
        monitorTags : { name: 'monitorTags', type: 'Array', subType: 'MonitorTagValue', isRequired: true }, 
        unit : { name: 'unit', type: 'String', isRequired: true }, 
        period : { name: 'period', type: 'Integer', isRequired: true }, 
        CounterFields : { name: 'CounterFields', type: 'CounterProperties' }, 
        GaugeFields : { name: 'GaugeFields', type: 'GaugeProperties' }
    }
}


//Mockup System for MonitorInfoDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorInfoDTO';
var dto_name = 'MonitorInfoDTO';

function MonitorInfoDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorInfoDTOData();
    }
}

function genMonitorInfoDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorInfoDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorInfoDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorInfoDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorInfoDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorInfoDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorInfoDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorInfoDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorInfoDTODataInit;
exports.genData = genMonitorInfoDTOData;
exports.getData = getMonitorInfoDTOData;
exports.findData = findMonitorInfoDTOData;
exports.getListData = getMonitorInfoDTOListData;
exports.deleteData = deleteMonitorInfoDTOData;
exports.saveData = saveMonitorInfoDTOData;
exports.saveListData = saveMonitorInfoDTOListData;
exports.getAllData = getAllMonitorInfoDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorInfoDTODataInit();
}

var overrideModule = '../overrides/MonitorInfoDTO';
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



