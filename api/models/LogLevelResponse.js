'use strict';

//Model Definition File for LogLevelResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var LogLevelListDTO = require('./LogLevelListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Günlük seviye değişimi işleminin cevap veri yapısı.
*/
exports.LogLevelResponse =  {
    type:'class',
    name:'LogLevelResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'LogLevelListDTO', isRequired: true }
    }
}


//Mockup System for LogLevelResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLogLevelResponse';
var dto_name = 'LogLevelResponse';

function LogLevelResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLogLevelResponseData();
    }
}

function genLogLevelResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLogLevelResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLogLevelResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findLogLevelResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLogLevelResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLogLevelResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveLogLevelResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLogLevelResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = LogLevelResponseDataInit;
exports.genData = genLogLevelResponseData;
exports.getData = getLogLevelResponseData;
exports.findData = findLogLevelResponseData;
exports.getListData = getLogLevelResponseListData;
exports.deleteData = deleteLogLevelResponseData;
exports.saveData = saveLogLevelResponseData;
exports.saveListData = saveLogLevelResponseListData;
exports.getAllData = getAllLogLevelResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    LogLevelResponseDataInit();
}

var overrideModule = '../overrides/LogLevelResponse';
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



