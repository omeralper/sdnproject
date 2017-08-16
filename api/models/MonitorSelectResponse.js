'use strict';

//Model Definition File for MonitorSelectResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MonitorInfoDTO = require('./MonitorInfoDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* MonitorSelect isteğine verilecek cevabın veri yapısıdır.
*/
exports.MonitorSelectResponse =  {
    type:'class',
    name:'MonitorSelectResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MonitorInfoDTO', isRequired: true }
    }
}


//Mockup System for MonitorSelectResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorSelectResponse';
var dto_name = 'MonitorSelectResponse';

function MonitorSelectResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorSelectResponseData();
    }
}

function genMonitorSelectResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorSelectResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorSelectResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorSelectResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorSelectResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorSelectResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorSelectResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorSelectResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorSelectResponseDataInit;
exports.genData = genMonitorSelectResponseData;
exports.getData = getMonitorSelectResponseData;
exports.findData = findMonitorSelectResponseData;
exports.getListData = getMonitorSelectResponseListData;
exports.deleteData = deleteMonitorSelectResponseData;
exports.saveData = saveMonitorSelectResponseData;
exports.saveListData = saveMonitorSelectResponseListData;
exports.getAllData = getAllMonitorSelectResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorSelectResponseDataInit();
}

var overrideModule = '../overrides/MonitorSelectResponse';
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



