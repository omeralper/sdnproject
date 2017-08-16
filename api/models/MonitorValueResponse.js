'use strict';

//Model Definition File for MonitorValueResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MonitorValueDTO = require('./MonitorValueDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* MonitorValue isteğine verilecek cevabın veri yapısıdır.
*/
exports.MonitorValueResponse =  {
    type:'class',
    name:'MonitorValueResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MonitorValueDTO', isRequired: true }
    }
}


//Mockup System for MonitorValueResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorValueResponse';
var dto_name = 'MonitorValueResponse';

function MonitorValueResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorValueResponseData();
    }
}

function genMonitorValueResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorValueResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorValueResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorValueResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorValueResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorValueResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorValueResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorValueResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorValueResponseDataInit;
exports.genData = genMonitorValueResponseData;
exports.getData = getMonitorValueResponseData;
exports.findData = findMonitorValueResponseData;
exports.getListData = getMonitorValueResponseListData;
exports.deleteData = deleteMonitorValueResponseData;
exports.saveData = saveMonitorValueResponseData;
exports.saveListData = saveMonitorValueResponseListData;
exports.getAllData = getAllMonitorValueResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorValueResponseDataInit();
}

var overrideModule = '../overrides/MonitorValueResponse';
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



