'use strict';

//Model Definition File for MonitorSelectListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MonitorInfoListDTO = require('./MonitorInfoListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* MonitorSelect isteğine verilecek liste şeklindeki cevabın veri yapısıdır.
*/
exports.MonitorSelectListResponse =  {
    type:'class',
    name:'MonitorSelectListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MonitorInfoListDTO', isRequired: true }
    }
}


//Mockup System for MonitorSelectListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorSelectListResponse';
var dto_name = 'MonitorSelectListResponse';

function MonitorSelectListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorSelectListResponseData();
    }
}

function genMonitorSelectListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorSelectListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorSelectListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorSelectListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorSelectListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorSelectListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorSelectListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorSelectListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorSelectListResponseDataInit;
exports.genData = genMonitorSelectListResponseData;
exports.getData = getMonitorSelectListResponseData;
exports.findData = findMonitorSelectListResponseData;
exports.getListData = getMonitorSelectListResponseListData;
exports.deleteData = deleteMonitorSelectListResponseData;
exports.saveData = saveMonitorSelectListResponseData;
exports.saveListData = saveMonitorSelectListResponseListData;
exports.getAllData = getAllMonitorSelectListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorSelectListResponseDataInit();
}

var overrideModule = '../overrides/MonitorSelectListResponse';
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



