'use strict';

//Model Definition File for MonitorValueListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MonitorValueListDTO = require('./MonitorValueListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* MonitorValue isteğine verilecek liste şeklindeki cevabın veri yapısıdır.
*/
exports.MonitorValueListResponse =  {
    type:'class',
    name:'MonitorValueListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MonitorValueListDTO', isRequired: true }
    }
}


//Mockup System for MonitorValueListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorValueListResponse';
var dto_name = 'MonitorValueListResponse';

function MonitorValueListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorValueListResponseData();
    }
}

function genMonitorValueListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorValueListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorValueListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorValueListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorValueListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorValueListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorValueListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorValueListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorValueListResponseDataInit;
exports.genData = genMonitorValueListResponseData;
exports.getData = getMonitorValueListResponseData;
exports.findData = findMonitorValueListResponseData;
exports.getListData = getMonitorValueListResponseListData;
exports.deleteData = deleteMonitorValueListResponseData;
exports.saveData = saveMonitorValueListResponseData;
exports.saveListData = saveMonitorValueListResponseListData;
exports.getAllData = getAllMonitorValueListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorValueListResponseDataInit();
}

var overrideModule = '../overrides/MonitorValueListResponse';
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



