'use strict';

//Model Definition File for LogResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Günlük işleminin cevap veri yapısı.
*/
exports.LogResponse =  {
    type:'class',
    name:'LogResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }
    }
}


//Mockup System for LogResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLogResponse';
var dto_name = 'LogResponse';

function LogResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLogResponseData();
    }
}

function genLogResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLogResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLogResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findLogResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLogResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLogResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveLogResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLogResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = LogResponseDataInit;
exports.genData = genLogResponseData;
exports.getData = getLogResponseData;
exports.findData = findLogResponseData;
exports.getListData = getLogResponseListData;
exports.deleteData = deleteLogResponseData;
exports.saveData = saveLogResponseData;
exports.saveListData = saveLogResponseListData;
exports.getAllData = getAllLogResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    LogResponseDataInit();
}

var overrideModule = '../overrides/LogResponse';
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



