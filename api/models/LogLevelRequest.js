'use strict';

//Model Definition File for LogLevelRequest.js

//var GenericRequest = require('./GenericRequest');
//var LogLevelDTO = require('./LogLevelDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Günlük verilerinin seviyelerinin değiştirilebilmesi için kullanılan veri yapısı
*/
exports.LogLevelRequest =  {
    type:'class',
    name:'LogLevelRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'Array', subType: 'LogLevelDTO', isRequired: true }
    }
}


//Mockup System for LogLevelRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLogLevelRequest';
var dto_name = 'LogLevelRequest';

function LogLevelRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLogLevelRequestData();
    }
}

function genLogLevelRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLogLevelRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLogLevelRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findLogLevelRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLogLevelRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLogLevelRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveLogLevelRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLogLevelRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = LogLevelRequestDataInit;
exports.genData = genLogLevelRequestData;
exports.getData = getLogLevelRequestData;
exports.findData = findLogLevelRequestData;
exports.getListData = getLogLevelRequestListData;
exports.deleteData = deleteLogLevelRequestData;
exports.saveData = saveLogLevelRequestData;
exports.saveListData = saveLogLevelRequestListData;
exports.getAllData = getAllLogLevelRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    LogLevelRequestDataInit();
}

var overrideModule = '../overrides/LogLevelRequest';
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



