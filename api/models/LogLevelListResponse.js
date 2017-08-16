'use strict';

//Model Definition File for LogLevelListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var LogLevelListDTO = require('./LogLevelListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Günlük listeleme işleminin cevap veri yapısı.
*/
exports.LogLevelListResponse =  {
    type:'class',
    name:'LogLevelListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'LogLevelListDTO', isRequired: true }
    }
}


//Mockup System for LogLevelListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLogLevelListResponse';
var dto_name = 'LogLevelListResponse';

function LogLevelListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLogLevelListResponseData();
    }
}

function genLogLevelListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLogLevelListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLogLevelListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findLogLevelListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLogLevelListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLogLevelListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveLogLevelListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLogLevelListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = LogLevelListResponseDataInit;
exports.genData = genLogLevelListResponseData;
exports.getData = getLogLevelListResponseData;
exports.findData = findLogLevelListResponseData;
exports.getListData = getLogLevelListResponseListData;
exports.deleteData = deleteLogLevelListResponseData;
exports.saveData = saveLogLevelListResponseData;
exports.saveListData = saveLogLevelListResponseListData;
exports.getAllData = getAllLogLevelListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    LogLevelListResponseDataInit();
}

var overrideModule = '../overrides/LogLevelListResponse';
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



