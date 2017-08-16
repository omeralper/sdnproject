'use strict';

//Model Definition File for MonitorSelectDTO.js

//var BaseDTO = require('./BaseDTO');
//var MonitorSearchCriteria = require('./MonitorSearchCriteria');

'use strict';
/**
* Göstergelerin araştırma kriterlerinin ve gönderilecek alanlarının belirtildiği veri yapısıdır.
*/
exports.MonitorSelectDTO =  {
    type:'class',
    name:'MonitorSelectDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        RequestFields : { name: 'RequestFields', type: 'MonitorSearchCriteria', isRequired: true }, 
        ResponseFields : { name: 'ResponseFields', type: 'Array', subType: 'string', isRequired: true }
    }
}


//Mockup System for MonitorSelectDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorSelectDTO';
var dto_name = 'MonitorSelectDTO';

function MonitorSelectDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorSelectDTOData();
    }
}

function genMonitorSelectDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorSelectDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorSelectDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorSelectDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorSelectDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorSelectDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorSelectDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorSelectDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorSelectDTODataInit;
exports.genData = genMonitorSelectDTOData;
exports.getData = getMonitorSelectDTOData;
exports.findData = findMonitorSelectDTOData;
exports.getListData = getMonitorSelectDTOListData;
exports.deleteData = deleteMonitorSelectDTOData;
exports.saveData = saveMonitorSelectDTOData;
exports.saveListData = saveMonitorSelectDTOListData;
exports.getAllData = getAllMonitorSelectDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorSelectDTODataInit();
}

var overrideModule = '../overrides/MonitorSelectDTO';
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



