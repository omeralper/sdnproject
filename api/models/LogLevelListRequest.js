'use strict';

//Model Definition File for LogLevelListRequest.js

//var GenericIdRequest = require('./GenericIdRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Günlük verilerinin seviyelerinin listelenmesi için kullanılan veri yapısı
*/
exports.LogLevelListRequest =  {
    type:'class',
    name:'LogLevelListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        id : { name: 'id', type: 'String', isRequired: true }
    }
}


//Mockup System for LogLevelListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLogLevelListRequest';
var dto_name = 'LogLevelListRequest';

function LogLevelListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLogLevelListRequestData();
    }
}

function genLogLevelListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLogLevelListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLogLevelListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findLogLevelListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLogLevelListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLogLevelListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveLogLevelListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLogLevelListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = LogLevelListRequestDataInit;
exports.genData = genLogLevelListRequestData;
exports.getData = getLogLevelListRequestData;
exports.findData = findLogLevelListRequestData;
exports.getListData = getLogLevelListRequestListData;
exports.deleteData = deleteLogLevelListRequestData;
exports.saveData = saveLogLevelListRequestData;
exports.saveListData = saveLogLevelListRequestListData;
exports.getAllData = getAllLogLevelListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    LogLevelListRequestDataInit();
}

var overrideModule = '../overrides/LogLevelListRequest';
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



