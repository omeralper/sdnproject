'use strict';

//Model Definition File for MonitorValueDTO.js

//var BaseDTO = require('./BaseDTO');
//var CounterValues = require('./CounterValues');
//var GaugeValues = require('./GaugeValues');

'use strict';
/**
* id numarası ile belirtilen bir göstergeye ait değerleri içeren nesnedir.
*/
exports.MonitorValueDTO =  {
    type:'class',
    name:'MonitorValueDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        CounterFields : { name: 'CounterFields', type: 'CounterValues' }, 
        GaugeFields : { name: 'GaugeFields', type: 'GaugeValues' }
    }
}


//Mockup System for MonitorValueDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorValueDTO';
var dto_name = 'MonitorValueDTO';

function MonitorValueDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorValueDTOData();
    }
}

function genMonitorValueDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorValueDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorValueDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorValueDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorValueDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorValueDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorValueDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorValueDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorValueDTODataInit;
exports.genData = genMonitorValueDTOData;
exports.getData = getMonitorValueDTOData;
exports.findData = findMonitorValueDTOData;
exports.getListData = getMonitorValueDTOListData;
exports.deleteData = deleteMonitorValueDTOData;
exports.saveData = saveMonitorValueDTOData;
exports.saveListData = saveMonitorValueDTOListData;
exports.getAllData = getAllMonitorValueDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorValueDTODataInit();
}

var overrideModule = '../overrides/MonitorValueDTO';
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



